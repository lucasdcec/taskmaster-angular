import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy_users';
import { Task } from './task/task';
import { AddTask } from './add-task/add-task';
import { NewTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [Task, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  users = DUMMY_USERS;
  @Input() userId!: string; // Diz para o TS: "isso pode não ser definido e estou ciente disso"

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

  get tarefasDoUsuario() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  completarTarefa(id: string) {
    this.tasks = this.tasks.filter((task) => task.id != id);
  }

  adicionando: boolean = false;
  botaoDeAdicionar() {
    this.adicionando = true;
  }

  cancelarAdicionar() {
    this.adicionando = false;
  }

  adicionarTarefa(dadosDaNovatarefa: NewTask) {
    const novaTarefa = {
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: dadosDaNovatarefa.title,
      summary: dadosDaNovatarefa.summary,
      dueDate: dadosDaNovatarefa.date,
    };
    this.tasks = [novaTarefa, ...this.tasks];
    this.adicionando = false;
  }
}
