import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoRestritoComponent } from './produto-restrito.component';

describe('ProdutoRestritoComponent', () => {
  let component: ProdutoRestritoComponent;
  let fixture: ComponentFixture<ProdutoRestritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoRestritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoRestritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
