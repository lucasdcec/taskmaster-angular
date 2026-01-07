import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: {
    id: string;
    name: string;
    avatar: string;
  };
  @Output() select = new EventEmitter<string>(); // permite emitir valores customizados para qualquer componete "parente"

  caminhoDaImagem = computed(() => {
    return 'assets/users/' + this.user.avatar;
  });
  // caminhoDaImagem() {
  //   return 'assets/users/' + this.avatar;
  // }
  selectedId() {
    this.select.emit(this.user.id);
  }
}
