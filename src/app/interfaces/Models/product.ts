import {Coordinate} from '../coordinate';

export interface Product {
  id: string;
  name: string;
  expiryDate: string;
  priority: number;
  needToBuy: boolean;
  fridgePosition: Coordinate;
}
