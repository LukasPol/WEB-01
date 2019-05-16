import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirMsgComponent } from './exibir-msg.component';

describe('ExibirMsgComponent', () => {
  let component: ExibirMsgComponent;
  let fixture: ComponentFixture<ExibirMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
