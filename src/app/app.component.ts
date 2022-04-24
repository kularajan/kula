import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kula';


  OnlyNumbersAllowed(event:any):boolean{
    const charCode =(event.which)?event.which:event.keycode;
    console.log(event.target.value)

    if (charCode>31 && (charCode<48 || charCode>57))
    { 
     console.log('charCode restricted is ' + charCode)
      return false;
    }
    return true;
  }
}
