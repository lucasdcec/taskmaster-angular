import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserTask } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input() tarefa!: UserTask;

  @Output() complete = new EventEmitter(); // Isso para emitir (out) que clicou no botão

  completeTask() {
    this.complete.emit(this.tarefa.id);
  }
}
