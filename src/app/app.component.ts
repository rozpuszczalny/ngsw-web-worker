import { Component } from '@angular/core';
import {WebWorkerComponent} from './web-worker/web-worker.component';
import {ServiceWorkerManagerComponent} from './service-worker-manager/service-worker-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WebWorkerComponent, ServiceWorkerManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
