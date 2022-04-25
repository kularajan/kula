import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  
  let fixture:ComponentFixture<AppComponent>;
  let componentInstance: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.componentInstance;
  });

  it('App Available', () => {
    expect(componentInstance).toBeTruthy();
  });  

  it ('Check Input less than 0', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#inputNumber');
      element.valueAsNumber=-1;
      element.dispatchEvent(new Event('keyup'));
      //const keyUpSpyon = spyOn(componentInstance,"ValidateEntry").and.callThrough();  
      //expect(keyUpSpyon).toHaveBeenCalled();
      expect(componentInstance.isError).toEqual(false);
    });
   
  });
})