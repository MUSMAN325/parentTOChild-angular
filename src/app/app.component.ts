import { BoundText } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { resolveTxt } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-project';
  arr =[];
  i = 0;
  getfun(data){
   this.arr[this.i++] = data; 
  
}


}



