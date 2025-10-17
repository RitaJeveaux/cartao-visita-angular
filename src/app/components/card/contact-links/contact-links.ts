import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-links',
  imports: [],
  templateUrl: './contact-links.html',
  styleUrl: './contact-links.css'
})
export class ContactLinks {
  linkedinUrl: string = 'https://www.linkedin.com/in/ritajeveaux/';
  gitHubUrl: string = 'https://github.com/RitaJeveaux';
  email: string = 'ritajeveaux@gmail.com';
}
