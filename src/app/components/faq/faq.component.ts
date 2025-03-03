import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';


interface FaqItems {
  value: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'atm-faq',
  imports: [
    CommonModule,
    AccordionModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqItems = [
    {
      value: 0,
      question: 'Posso ter mais números conectados a Atmus CRM?',
      answer: 'Resposta sobre números conectados ao Atmus CRM.'
    },
    {
      value: 1,
      question: 'Tenho limite de mensagens para enviar meus fluxos de mensagens?',
      answer: 'Resposta sobre limites de mensagens.'
    },
    {
      value: 2,
      question: 'O que são Tokens Voice, e se o meu acabar?',
      answer: 'Resposta sobre Tokens Voice.'
    },
    {
      value: 3,
      question: 'Atmus CRM escuta áudios?',
      answer: 'Sim! Nossa tecnologia permite que as respostas por texto ou áudio sejam entendidas pelo sistema, podendo responder de forma inteligente a cada mensagem que o seu cliente manda.'
    },
    {
      value: 4,
      question: 'Posso cadastrar minha equipe?',
      answer: 'Resposta sobre cadastro de equipe.'
    },
    {
      value: 5,
      question: 'Nunca mexi com ferramentas na internet, vou conseguir mexer nesta ferramenta?',
      answer: 'Resposta sobre facilidade de uso da ferramenta.'
    }
  ];
}
