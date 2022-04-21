import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-component-child',
  templateUrl: './component-child.component.html',
  styleUrls: ['./component-child.component.css']
})
export class ComponentChildComponent implements OnInit {


  @Output()
  somethingHappened:EventEmitter<Product>=new EventEmitter<Product>();
    
  
  constructor() { }

  ngOnInit(): void {
  }

  onclick()
  {
    this.somethingHappened.emit(new Product("laptop","HP",50000));
  }
}




class Product
{
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get brand(): string {
    return this._brand;
  }
  public set brand(value: string) {
    this._brand = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  constructor(private _description: string, private _brand: string, private _price: number){}
}