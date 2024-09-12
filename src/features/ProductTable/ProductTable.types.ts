export interface Price {
  value: number;
  currency: string;
  isHot?: boolean;
  isPinned?: boolean;
}

export interface Vendor {
  id: number;
  avatar: string;
  name: string;
  description: string;
  rating: number;
}

export interface DataType {
  key: React.Key;
  name: string;
  vendor: Vendor;
  amount: string | number;
  price: Price;
}
