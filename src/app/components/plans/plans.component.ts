import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Benefits {
  id: string;
  text: string;
}

@Component({
  selector: 'atm-plans',
  imports: [CommonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent implements OnInit {
  constructor() { }
  public showAllOne = false;
  public showAllTwo = false;
  public showAllThree = false;

  public benefitsOne: Benefits[] = [
    { id: '1', text: '1 Workspace' },
    { id: '2', text: '1 WhatsApp' },
    { id: '3', text: '1 Voz clonada' },
    { id: '4', text: 'Mensagens ilimitadas' },
    { id: '5', text: 'Contatos ilimitados' },
    { id: '6', text: 'Chat ao vivo' },
    { id: '7', text: 'Randomizador de WhatsApp' },
    { id: '8', text: 'Integração com CRM' },
    { id: '9', text: 'Integração com Zapier' },
    { id: '10', text: 'Integração com Facebook' },
  ];

  public benefitsTwo: Benefits[] = [
    { id: '1', text: '1 Workspace' },
    { id: '2', text: '1 WhatsApp' },
    { id: '3', text: '1 Voz clonada' },
    { id: '4', text: 'Mensagens ilimitadas' },
    { id: '5', text: 'Contatos ilimitados' },
    { id: '6', text: 'Chat ao vivo' },
    { id: '7', text: 'Randomizador de WhatsApp' },
    { id: '8', text: 'Integração com CRM' },
    { id: '9', text: 'Integração com Zapier' },
    { id: '10', text: 'Integração com Facebook' },
  ];

  public benefitsThree: Benefits[] = [
    { id: '1', text: '1 Workspace' },
    { id: '2', text: '1 WhatsApp' },
    { id: '3', text: '1 Voz clonada' },
    { id: '4', text: 'Mensagens ilimitadas' },
    { id: '5', text: 'Contatos ilimitados' },
    { id: '6', text: 'Chat ao vivo' },
    { id: '7', text: 'Randomizador de WhatsApp' },
    { id: '8', text: 'Integração com CRM' },
    { id: '9', text: 'Integração com Zapier' },
    { id: '10', text: 'Integração com Facebook' },
  ];

  ngOnInit() {
  }
}
