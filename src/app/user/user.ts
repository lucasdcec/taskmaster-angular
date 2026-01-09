import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { type Usuario } from './user.model';
import { Card } from '../ui/card/card';

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: Usuario;
  @Output() select = new EventEmitter<string>(); // permite emitir valores customizados para qualquer componete "parente"
  @Input({ required: true }) selecionado!: boolean;

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
