import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-info',
  imports: [CommonModule],
  templateUrl: './profile-info.html',
  styleUrl: './profile-info.css'
})
export class ProfileInfo {
  nome: string = 'Rita Jeveaux';
  titulo: string = 'Desenvolvedora front-end';
  descricao: string = 'Estou a disposição para novos projetos.'
  skills: string[] = ['HTML', 'CSS', 'Typescript', 'Angular', 'React'];
}
