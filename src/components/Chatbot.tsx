import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, MinusIcon } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatContext {
  lastTopic?: string;
  vehicleDiscussed?: string;
  inquiryType?: 'general' | 'pricing' | 'technical' | 'test-drive' | 'support';
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [context, setContext] = useState<ChatContext>({});
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm UTU's virtual assistant. How can I help you with your electric vehicle needs today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const analyzeMessage = (msg: string): ChatContext => {
    const lowerMsg = msg.toLowerCase();
    
    // Detect vehicle names
    const vehicles = ['model 3', 'model y', 'cybertruck', 'taycan', 'eqs', 'i4'];
    const mentionedVehicle = vehicles.find(v => lowerMsg.includes(v));

    // Detect inquiry type
    let inquiryType: ChatContext['inquiryType'] = 'general';
    if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('payment')) {
      inquiryType = 'pricing';
    } else if (lowerMsg.includes('test drive') || lowerMsg.includes('book') || lowerMsg.includes('appointment')) {
      inquiryType = 'test-drive';
    } else if (lowerMsg.includes('range') || lowerMsg.includes('battery') || lowerMsg.includes('charging')) {
      inquiryType = 'technical';
    } else if (lowerMsg.includes('help') || lowerMsg.includes('support') || lowerMsg.includes('issue')) {
      inquiryType = 'support';
    }

    return {
      ...context,
      lastTopic: inquiryType,
      vehicleDiscussed: mentionedVehicle || context.vehicleDiscussed,
      inquiryType
    };
  };

  const generateResponse = (userContext: ChatContext): string => {
    const { vehicleDiscussed, inquiryType } = userContext;

    // Prevent repetitive responses
    if (messages.length > 1) {
      const lastBotMessage = messages.filter(m => m.isBot).pop()?.text;
      if (lastBotMessage?.includes('schedule') && inquiryType === 'test-drive') {
        return "I can help you pick a specific time and date for your test drive. When would you prefer to visit us?";
      }
    }

    // Context-aware responses
    switch (inquiryType) {
      case 'pricing':
        return vehicleDiscussed
          ? `I can provide detailed pricing information for the ${vehicleDiscussed}. Would you like to know about our financing options as well?`
          : "I can help you with pricing for any of our vehicles. Which model are you interested in?";

      case 'technical':
        return vehicleDiscussed
          ? `I'd be happy to explain the technical specifications of the ${vehicleDiscussed}. What specific aspects would you like to know about?`
          : "I can provide technical information about our vehicles. Which specifications are you most interested in?";

      case 'test-drive':
        return vehicleDiscussed
          ? `Great choice! I can help you schedule a test drive for the ${vehicleDiscussed}. Would you prefer a weekday or weekend appointment?`
          : "I'd be happy to arrange a test drive. Which of our vehicles would you like to experience?";

      case 'support':
        return "I'll connect you with our support team. Could you please specify what type of assistance you need?";

      default:
        const suggestions = [
          "Would you like to learn about our latest electric vehicles?",
          "I can help you with vehicle specifications, pricing, or scheduling a test drive.",
          "Are you looking for information about our charging solutions?",
          "Would you like to know about our current promotions and financing options?"
        ];
        return suggestions[Math.floor(Math.random() * suggestions.length)];
    }
  };

  const handleSend = async () => {
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, {
      text: message,
      isBot: false,
      timestamp: new Date()
    }]);

    // Analyze message and update context
    const newContext = analyzeMessage(message);
    setContext(newContext);

    // Generate contextual response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: generateResponse(newContext),
        isBot: true,
        timestamp: new Date()
      }]);
    }, 1000);

    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-primary text-black p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 z-50"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 w-[350px] bg-white rounded-lg shadow-xl z-50 transition-all duration-300 ${isMinimized ? 'h-14' : 'h-[500px]'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <MessageSquare className="h-5 w-5 text-primary mr-2" />
          <h3 className="font-semibold">UTU Assistant</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-500 hover:text-gray-700"
          >
            <MinusIcon className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="h-[380px] overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-primary text-black'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-primary"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-primary text-black rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}