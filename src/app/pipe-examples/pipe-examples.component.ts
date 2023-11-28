import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-pipe-examples',
  templateUrl: './pipe-examples.component.html',
  styleUrls: ['./pipe-examples.component.scss']
})
export class PipeExamplesComponent implements OnInit {
  text: string = "hello sidc!";
  currentDate: Date = new Date("1997-12-31");
  num: number = 3.14159;
  price: number = 420.69;
  percent: number = 0.69;
  data$ = this.dataService.getData();

  constructor(private dataService: DataService){}


  ngOnInit(): void {
    
  }
}
