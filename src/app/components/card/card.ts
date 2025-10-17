import { Component } from '@angular/core';
import { ProfileImage } from './profile-image/profile-image';
import { ProfileInfo } from './profile-info/profile-info';
import { ContactLinks } from './contact-links/contact-links';


@Component({
  selector: 'app-card',
  imports: [ProfileImage, ProfileInfo, ContactLinks],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

}
