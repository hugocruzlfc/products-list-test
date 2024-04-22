import { Care } from './care.interface';
import { ColorDetail } from './color-detail.interface';
import { Review } from './review.interface';

export interface Product {
  ID?: string;
  Image: string;
  Image1: string;
  Content: string;
  Keywords: string;
  Name: string;
  Category: string;
  Colors: string;
  Price: string;
  Promo_apply: string;
  Reviews: Review | string;
  Description_title: string;
  Description_content: string;
  Details: string;
  Care: Care | string;
  Color_detail: ColorDetail[];
}
