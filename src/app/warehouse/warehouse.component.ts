import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  products:Array<Warehouse>=[
    new Warehouse(11,"Laptop",500),
    new Warehouse(11,"Pc",500),
  ]



  RemainQuantity($event:any)
  {
    let productName=$event.target['productName'].value;
    let Quantity=$event.target['Quantity'].value;

    this.products.forEach(element=>{
      if(element.ProductName==productName)
      {
        element.quantity-=parseInt(Quantity);
        console.log(element);
      }
    })
  }
  constructor() { }

  ngOnInit(): void {
  }
}

export class Warehouse
{
public get ProductName(): string {
  return this._ProductName;
}
public set ProductName(value: string) {
  this._ProductName = value;
}
public get quantity(): number {
  return this._quantity;
}
public set quantity(value: number) {
  this._quantity = value;
}


public get productId(): number {
  return this._productId;
}
public set productId(value: number) {
  this._productId = value;
}
constructor(private _productId: number, private _ProductName: string, private _quantity: number ){}
}


