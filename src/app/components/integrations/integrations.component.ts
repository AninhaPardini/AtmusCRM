import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';

interface IntegrationsButtons {
  id: string;
  class: string;
  iconClass?: string;
  imgSrc?: string;
  imgAlt?: string;
  url: string;
}

@Component({
  selector: 'atm-integrations',
  imports: [CommonModule],
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.css'
})
export class IntegrationsComponent implements OnInit {
  public showAll = false;
  public buttons: IntegrationsButtons[] = [
    {
      id: 'google', class: 'google', iconClass: '', imgSrc: 'https://static.cdnlogo.com/logos/g/35/google-icon.svg', url: 'https://media.tenor.com/t-RdfrxOqusAAAAe/macaco.png', imgAlt: 'Logo do Google'
    },
    {
      id: 'whats', class: 'whats', iconClass: 'bx bxl-whatsapp', url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR07CGkVyPNlbyO5QlRCx-ZpR6OS4jr_1ki9koLpJeMFjLyfvMueu7TLN5Zag18no1seSYTab-8glThEi-SuMLM_A'
    },
    {
      id: 'insta', class: 'insta', iconClass: 'bx bxl-instagram', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTWsBcJPq5-NreljJqMxnsjyYQmWInLHq6Mg&s'
    },
    {
      id: 'face', class: 'face', iconClass: 'bx bxl-facebook', url: 'https://s2-g1.glbimg.com/swNvDnL9llISieXZA7fpk-JDtuo=/1200x/smart/filters:cover():strip_icc()/s.glbimg.com/jo/g1/f/original/2012/03/06/caters_monkey_snapper_03.jpg'
    },
    {
      id: 'meta', class: 'meta', iconClass: 'bx bxl-meta', url: 'https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/07/30153912/meme-macaquinho-compressed.jpg'
    },
    {
      id: 'shopify', class: 'shopify', iconClass: 'bx bxl-shopify', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1J'
    },
    {
      id: 'messenger', class: 'messenger', iconClass: 'bx bxl-messenger', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1J'
    },
    {
      id: 'hotmart', class: 'hotmart', iconClass: 'bx bxs-hot', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1J'
    },
    {
      id: 'zapier', class: 'zapier', imgSrc: 'https://cdn.worldvectorlogo.com/logos/zapier.svg', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1J'
    },
    {
      id: 'openia', class: 'openia', imgSrc: 'https://www.svgrepo.com/show/306500/openai.svg', imgAlt: 'Logo da OpenIa', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1J'
    },
    {
      id: 'pipedrive', class: 'pipedrive', imgSrc: 'https://play-lh.googleusercontent.com/XAKratCqSJUb3ZmItve16p8RjiF0ZvN_czysEoqtGET7i-tsdJEozbnOYRM6jQNHEg', imgAlt: "Pipedrive Logo", url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1J'
    },
  ];

  public changeImage(button: IntegrationsButtons): void {
    const image = document.getElementById('demonstration');

    if (image) {
      image.removeAttribute('src');
      console.log(button.url);
      image.setAttribute('src', button.url);
    }
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {


    this.renderer.listen('window', 'click', (event) => {
      const target = event.target as HTMLElement;
      console.log(target);
      if (target.tagName === 'BUTTON' || target.tagName === 'I' || target.tagName === 'IMG') {
        const button = this.buttons.find((b) => b.id === target.id);
        if (button) {
          this.changeImage(button);
        }
      }
    });
  }
}
