import { Component,Input , OnInit} from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  @Input() fetch;
  constructor() { }

  ngOnInit(): void {
  }

}
