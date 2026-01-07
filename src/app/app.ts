import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy_users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS; // Define aqui para que no app.html também se possa chamar os usuários
  iDParaMostrar?: string;
  receberIdPeloClick(id: string) {
    // Ele vai saber qual id recebeu por causa do $event
    // alert(this.iDParaMostrar);
    this.iDParaMostrar = id;
  }
}
