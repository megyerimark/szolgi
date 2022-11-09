import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {id : 1 ,name :"Szekrény" ,price :  69},
    {id : 2 ,name :"Ajtó" ,price : 841 },
    {id : 3 ,name :"Kötél" ,price : 1000000 },
    {id : 4 ,name :"VGA" ,price : 547 },
    {id : 5 ,name :"Vasaló" ,price : 155 },
  ]

  constructor() { }
}
