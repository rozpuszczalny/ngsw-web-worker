import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWorkerManagerComponent } from './service-worker-manager.component';

describe('ServiceWorkerManagerComponent', () => {
  let component: ServiceWorkerManagerComponent;
  let fixture: ComponentFixture<ServiceWorkerManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceWorkerManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceWorkerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
