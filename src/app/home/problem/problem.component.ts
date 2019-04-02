import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

	private problem:number = 0;

  constructor() { }

  ngOnInit() {
  }

}
