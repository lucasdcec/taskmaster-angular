import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy_users';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  users = DUMMY_USERS;
  @Input() userId?: string; // Diz para o TS: "isso pode não ser definido e estou ciente disso"

  //@Input() id: string | undefined;

  // Procuramos na lista o usuário que tem o mesmo ID que recebemos no @Input
  get selectedUser() {
    return this.users.find((user) => user.id === this.userId);
  }

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  @Input(/*{ required: true }*/) idDoUsuario!: string;

  get tarefasDoUsuario() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
