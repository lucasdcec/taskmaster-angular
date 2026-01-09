import { Component, inject, Input } from '@angular/core';
import { UserTask } from './task.model';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input() tarefa!: UserTask;

  private tasksService = inject(TasksService);
  completeTask() {
    this.tasksService.removeTask(this.tarefa.id);
  }
}
