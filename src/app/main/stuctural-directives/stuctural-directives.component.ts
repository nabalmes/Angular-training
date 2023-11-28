import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/shared/enums/status';
import { Customer } from 'src/app/shared/interfaces/customer';

@Component({
  selector: 'app-stuctural-directives',
  templateUrl: './stuctural-directives.component.html',
  styleUrls: ['./stuctural-directives.component.scss']
})
export class StucturalDirectivesComponent implements OnInit {

  isUserLoggedIn: boolean = true;
  fullName: string = "Manuel L Quezon";
  status: string = Status.ACTIVE;
  statuses: string[] = [Status.ACTIVE, Status.INACTIVE];
  customers: Customer[] = [
    { firstName: 'John', lastName: 'Doe', age: 20 },
    { firstName: 'Jane', lastName: 'Smith', age: 33 },
    { firstName: 'Robert', lastName: 'Johnson', age: 50 },
    { firstName: 'Emily', lastName: 'Davis', age: 45 },
    { firstName: 'Michael', lastName: 'Brown', age: 37 }
  ]

  constructor(){}
  
  ngOnInit(): void {
    
  }
}
