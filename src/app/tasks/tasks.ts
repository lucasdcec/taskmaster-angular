import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { DUMMY_USERS } from '../dummy_users';
import { Task } from './task/task';
import { AddTask } from './add-task/add-task';
import { type NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  users = DUMMY_USERS;
  @Input() userId!: string; // Diz para o TS: "isso pode não ser definido e estou ciente disso"
  // private tasksService:TasksService
  // constructor(tasksService: TasksService) {
  //   this.tasksService = tasksService
  // }
  private tasksService = inject(TasksService);

  // Procuramos na lista o usuário que tem o mesmo ID que recebemos no @Input
  get selectedUser() {
    return this.users.find((user) => user.id === this.userId);
  }

  get tarefasDoUsuario() {
    return this.tasksService.getUserTasks(this.userId);
  }

  adicionando: boolean = false;
  botaoDeAdicionar() {
    this.adicionando = true;
  }

  cancelarAdicionar() {
    this.adicionando = false;
  }
}
