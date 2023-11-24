import { Component, Output, Input, OnChanges, OnInit, SimpleChanges, AfterViewInit, ChangeDetectorRef, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() inputData: string = '';
  @Input() title: string = '';
  @Output() msgEvent = new EventEmitter();

  counter: number = 0;
  fullName: string = "";
  constructor(private cd: ChangeDetectorRef){}

  ngOnInit(): void {
    
  }

  sendMessage() {
    this.msgEvent.emit("Hello World!");
  }
  
  ngAfterViewInit(): void {
   console.log("afterViewInit!!!");
    this.counter++;
    this.cd.detectChanges();
  }

  ngAfterViewChecked(): void {
    console.log("afterViewChecked!!!");
    this.counter++;
    this.cd.detectChanges();
    
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'inputData') {
        const changedProp = changes[propName];
        const newValue = changedProp.currentValue;
        const previousValue = changedProp.previousValue;

        console.log(`ngOnChanges - InputData changed. Previous value: ${previousValue}, New value: ${newValue}`);
      }
    }
  }
}
