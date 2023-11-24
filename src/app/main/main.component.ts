import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  parentData = 'Andrea ang Brilyantes';
  title = "List of Customerss"

  changeParentData() {
    this.parentData = 'Daniel Padilla';
  }
  

receiveMessage(message: string){
  this.title = message;
}

  ngOnInit(): void {
  }

}