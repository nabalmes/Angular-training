import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {
  isHighlighted: boolean = false;

  constructor(){}
  ngOnInit(): void {
    
  }

  textStyle = {
    'font-size': '20px',
    'color': '#ffff'
  }

  inputValue = '';

  toggleHighlight(): void{
    this.isHighlighted = !this.isHighlighted;
  }
}
