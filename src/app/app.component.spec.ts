import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit(`should have as title 'kula'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('kula');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('kula app is running!');
  });


});

describe('Custom Tests',() =>{
  it('should show controls and Validations',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    let inputBox = fixture.nativeElement.querySelector('[data-test="input-number"]');
    let listControl = fixture.nativeElement.querySelector('[data-test="list"]');
    let previousButton = fixture.nativeElement.querySelector('[data-test="previous-button"]');
    let nextButton = fixture.nativeElement.querySelector('[data-test="next-button"]');
    
    expect(inputBox).toBeTruthy();
    expect(listControl).toBeTruthy();
    expect(nextButton).toBeTruthy();
    expect(previousButton).toBeTruthy();

    expect(previousButton.textContent.trim()).toBe('Previous');
    expect(nextButton.textContent.trim()).toBe('Next');
    
  })


})
