import { useState } from'react';
import { Calculator } from 'lucide-react';

export function FinanceCalculator() {
  const [calculatorType, setCalculatorType] = useState<'loan' | 'import'>('loan');
  const [loanAmount, setLoanAmount] = useState<number>(30000);
  const [loanTerm, setLoanTerm] = useState<number>(36);
  const [interestRate, setInterestRate] = useState<number>(12);
  const [vehicleValue, setVehicleValue] = useState<number>(25000);
  const [importDuty] = useState<number>(25);
  const [vat] = useState<number>(16);

  const calculateLoanPayment = () => {
    const monthlyRate = interestRate / 1200;
    const monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
      (Math.pow(1 + monthlyRate, loanTerm) - 1);
    return monthlyPayment.toFixed(2);
  };

  const calculateImportCosts = () => {
    const dutyAmount = vehicleValue * (importDuty / 100);
    const vatAmount = (vehicleValue + dutyAmount) * (vat / 100);
    const totalCost = vehicleValue + dutyAmount + vatAmount;
    return {
      duty: dutyAmount.toFixed(2),
      vat: vatAmount.toFixed(2),
      total: totalCost.toFixed(2),
    };
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Calculator className="h-6 w-6 text-primary mr-2" />
        <h3 className="text-xl font-semibold">Financial Calculator</h3>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setCalculatorType('loan')}
          className={`flex-1 py-2 px-4 rounded-lg ${
            calculatorType === 'loan'
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          Loan Calculator
        </button>
        <button
          onClick={() => setCalculatorType('import')}
          className={`flex-1 py-2 px-4 rounded-lg ${
            calculatorType === 'import'
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          Import Calculator
        </button>
      </div>

      {calculatorType === 'loan' ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Loan Amount ($)
            </label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full p-2 border border-gray-200 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Loan Term (months)
            </label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full p-2 border border-gray-200 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Interest Rate (%)
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full p-2 border border-gray-200 rounded-lg"
            />
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Monthly Payment:</p>
            <p className="text-2xl font-bold text-primary">
              ${calculateLoanPayment()}
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Value ($)
            </label>
            <input
              type="number"
              value={vehicleValue}
              onChange={(e) => setVehicleValue(Number(e.target.value))}
              className="w-full p-2 border border-gray-200 rounded-lg"
            />
          </div>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Import Duty ({importDuty}%):</span>
              <span className="font-semibold">${calculateImportCosts().duty}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">VAT ({vat}%):</span>
              <span className="font-semibold">${calculateImportCosts().vat}</span>
            </div>
            <div className="border-t pt-2 flex justify-between">
              <span className="text-gray-600">Total Cost:</span>
              <span className="font-bold text-primary">
                ${calculateImportCosts().total}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}