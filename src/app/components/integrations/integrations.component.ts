import { Component, OnInit, Renderer2 } from '@angular/core';

interface IntegrationsButtons {
  name: string;
  url: string;
}

@Component({
  selector: 'atm-integrations',
  imports: [],
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.css'
})
export class IntegrationsComponent implements OnInit {
  public buttons: IntegrationsButtons[] = [
    { name: 'whats', url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR07CGkVyPNlbyO5QlRCx-ZpR6OS4jr_1ki9koLpJeMFjLyfvMueu7TLN5Zag18no1seSYTab-8glThEi-SuMLM_A' },
    { name: 'face', url: 'https://s2-g1.glbimg.com/swNvDnL9llISieXZA7fpk-JDtuo=/1200x/smart/filters:cover():strip_icc()/s.glbimg.com/jo/g1/f/original/2012/03/06/caters_monkey_snapper_03.jpg' },
    { name: 'meta', url: 'https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/07/30153912/meme-macaquinho-compressed.jpg' },
    { name: 'google', url: 'https://media.tenor.com/t-RdfrxOqusAAAAe/macaco.png' },
    { name: 'insta', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTWsBcJPq5-NreljJqMxnsjyYQmWInLHq6Mg&s' },
  ];

  public changeImage(button: IntegrationsButtons): void {
    const image = document.getElementById('demonstration');

    if (image) {
      image.removeAttribute('src');
      console.log(button.url);
      image.setAttribute('src', button.url);
    }
  }

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {


    this.renderer.listen('window', 'click', (event) => {
      const target = event.target as HTMLElement;
      console.log(target);
      if (target.tagName === 'BUTTON' || target.tagName === 'I' || target.tagName === 'IMG') {
        const button = this.buttons.find((b) => b.name === target.id);
        if (button) {
          this.changeImage(button);
        }
      }
    });
  }
}
