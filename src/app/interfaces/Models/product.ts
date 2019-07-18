import {Coordinate} from '../coordinate';

export interface Product {
  id: string;
  name: string;
  expiryDate: Date;
  needToBuy: boolean;
  fridgePosition: Coordinate;
  dotColor: string;
}
