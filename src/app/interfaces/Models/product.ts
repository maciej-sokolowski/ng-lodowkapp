import {Coordinate} from '../coordinate';

export interface Product {
  id: string;
  name: string;
  expiryDate: Date;
  priority: number;
  needToBuy: boolean;
  fridgePosition: Coordinate;
}
