import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Warehouse, WarehouseComponent } from '../warehouse/warehouse.component';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

@Input()
 products!:Array<Warehouse>

 @Output()
 somethingHappened:EventEmitter<Store>=new EventEmitter<Store>();

  constructor() { }

  ngOnInit(): void {
  }
  onclick($event:any)
  {
   this.somethingHappened.emit(new Store(new Warehouse(11,"Laptop",100),90));
   console.log(this.somethingHappened);
  }

}

class Store
{
  public get unit(): number {
    return this._unit;
  }
  public set unit(value: number) {
    this._unit = value;
  }
  public get warehouse(): Warehouse {
    return this._warehouse;
  }
  public set warehouse(value: Warehouse) {
    this._warehouse = value;
  }
  constructor(private _warehouse: Warehouse, private _unit: number, ){}
}

