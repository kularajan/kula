import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isError = false;
  numItemArray = [] as numItem[];
  pageIndex = 1;

  OnlyNumbersAllowed(event: KeyboardEvent): boolean {

    const charCode = event.keyCode;

    // Numbers keys   48 -> 57    
    // NumPad keys    96 -> 105
    // Enter key      13
    // Backspace key  8
    // Delete key     46
    // Arrow left & Right 37 , 39

    if ((charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105) && ([13, 8, 46, 37, 39].indexOf(charCode) === -1)) {
      return false;
    }
    else {
      return true;
    }
  }

  ValidateEntry(event: any) {

    this.isError = Number(event.target.value) > 200 || Number(event.target.value) < 1;
    console.log(this.isError);

    if (!this.isError) {

      this.pageIndex = 1;

      this.numItemArray = [];

      for (var i = 1; i <= Number(event.target.value); i++) {

        this.numItemArray.push(new numItem(i));

      }
    }
  }

  get dayIndex(): string {
    return '' + ((new Date().getDay() === 1) ? '-m' : ''); //Sunday = 0, ... 
  }

  allowToShow(item: numItem): boolean {
    return item.id > ((this.pageIndex - 1 )* 20) && item.id <= (this.pageIndex * 20);
  }

  callNextList() {
    this.pageIndex++;
  }

  callPreviousList() {
    this.pageIndex--;
  }

  showNextPaging():boolean {
    return this.numItemArray.length > 20 && this.pageIndex * 20 < this.numItemArray.length;
  }
  showPreviousPaging():boolean {
    return  this.pageIndex > 1;
  }

}

export class numItem {
  public id: number;

  constructor(id: number) {
    this.id = id;
  }
  get isOther(): boolean {
    return !(this.isWalker || this.isAssessment);
  }

  get isWalker(): boolean {
    return (this.id % 3 === 0);
  }
  get isAssessment(): boolean {
    return (this.id % 5 === 0);
  }
}
