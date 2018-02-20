import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  totalResults: number;

  constructor() { }

  ngOnInit() {
    this.totalResults = 116;
  }

}