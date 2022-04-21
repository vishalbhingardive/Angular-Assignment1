import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngular';
  message="Hello";
  Name="Wai Technologies"; 
    address:Address=new  Address("Nagar",414001,"India")
    address1:Address=new  Address("Pune",412126,"India");
  address2:Address=new  Address("Pune",412126,"India");
  address3:Address=new  Address("Pune",412126,"India");
  address4:Address=new  Address("Pune",412126,"India");

  
    
  
}
class Address
{
public get Country(): string {
  return this._Country;
}
public set Country(value: string) {
  this._Country = value;
}
public get pin(): number {
  return this._pin;
}
public set pin(value: number) {
  this._pin = value;
}
public get City(): string {
  return this._City;
}
public set City(value: string) {
  this._City = value;
}



constructor(private _City: string, private _pin: number, private _Country: string) {}
}
