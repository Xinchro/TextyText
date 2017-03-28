import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textlog',
  templateUrl: './textlog.component.html',
  styleUrls: ['./textlog.component.css']
})
export class TextlogComponent implements OnInit {
  loglines = []

  constructor() {
    this.loglines.push(["This is a line in the log","negative"])
    this.loglines.push(["This is another line in the log","positive"])
    this.loglines.push(["This is one more line in the log","neutral"])
  }

  ngOnInit() {
  }

}
