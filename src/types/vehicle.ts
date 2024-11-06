export interface Vehicle {
    id: number;
    name: string;
    image: string;
    price: string;
    range: string;
    acceleration: string;
    charging: string;
    category: 'sedan' | 'pickup' | 'truck' | 'suv'| 'tuktuk'| 'golf cart';
    features: string[];
  }