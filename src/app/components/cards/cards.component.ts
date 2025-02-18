import { Component, input, Input} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageCard: string = '';
  @Input() icon: string = '';
  @Input() background: string = '#fff';
  @Input() darkMode: boolean = false; // Para os cards escuros
}
