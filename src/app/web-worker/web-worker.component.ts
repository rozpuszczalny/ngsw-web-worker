import {NgFor, NgIf} from '@angular/common';
import { Component } from '@angular/core';

const parseIfError = (error: unknown) => error instanceof Error ? `${error.name}: ${error.message}\nStack: \n${error.stack}` : `${error}`;

@Component({
  selector: 'app-web-worker',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './web-worker.component.html',
  styleUrl: './web-worker.component.css'
})
export class WebWorkerComponent {

  protected worker: Worker|undefined;
  protected messages: string[] = [];

  protected lastWorkerError: string|undefined;

  startWorker() {
    if (this.worker) {
      return;
    }

    if (typeof Worker === 'undefined') {
      return;
    }

    const worker = new Worker(new URL('./worker.worker', import.meta.url));
    this.worker = worker;
    this.worker.addEventListener('message', ({data}) => this.messages.push(`${new Date().toLocaleString()}: ${data}`));
    this.worker.addEventListener('error', (e) => {
      this.lastWorkerError = e instanceof Event ? `Event in error handler: ${e.message} ${parseIfError(e.error)}` : parseIfError(e);
      this.stopWorker();
    });
  }

  send() {
    this.worker?.postMessage('ping');
  }

  stopWorker() {
    this.worker?.terminate();
    this.worker = undefined;
    this.messages.splice(0, this.messages.length);
  }

}
