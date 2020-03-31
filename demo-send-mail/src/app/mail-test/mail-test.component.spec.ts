import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailTestComponent } from './mail-test.component';

describe('MailTestComponent', () => {
  let component: MailTestComponent;
  let fixture: ComponentFixture<MailTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
