import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-cell',
  templateUrl: './recipe-cell.component.html',
  styleUrls: ['./recipe-cell.component.scss']
})
export class RecipeCellComponent implements OnInit {
  @Input() recipe;
  constructor() { }

  ngOnInit() {
  }

}
