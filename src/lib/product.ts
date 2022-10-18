import { Product } from './interfaces'

abstract class ProductBase implements  Product {
  constructor(public id: number,public name: string, public icon: string){}
  validate(): boolean{
    throw new Error('Not implemented')
   }
}

export class FoodProduct extends ProductBase {
 validate(): boolean{
  return !!this.id && !!this.name && !!this.icon;
 }
}


