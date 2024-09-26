import {NgIf} from '@angular/common';
import { Component, inject } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-service-worker-manager',
  standalone: true,
  imports: [NgIf],
  templateUrl: './service-worker-manager.component.html',
  styleUrl: './service-worker-manager.component.css'
})
export class ServiceWorkerManagerComponent {
  protected update = inject(SwUpdate);
  protected updateAvailable = false;

  async checkForUpdate() {
    this.updateAvailable = await this.update.checkForUpdate();
  }

  reload() {
    if (this.updateAvailable) {
      location.reload();
    }
  }
}
