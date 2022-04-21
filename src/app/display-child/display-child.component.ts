import { Component, Input, OnInit } from '@angular/core';





@Component({
  selector: 'app-display-child',
  templateUrl: './display-child.component.html',
  styleUrls: ['./display-child.component.css']
})
export class DisplayChildComponent implements OnInit {


  @Input()
  objects !:Array<any>;
  constructor() { 

    console.log("Display Object Component");
  }
  getKeys(obj:any)
  {
return Object.keys(obj);
  }

  ngOnInit(): void {
  }

}
