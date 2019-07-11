export interface Product {
  id: string;
  name: string;
  expiryDate: Date;
  priority: number;
  needToBuy: boolean;
  fridgePosition: {
    x: number;
    y: number;
  };
}
