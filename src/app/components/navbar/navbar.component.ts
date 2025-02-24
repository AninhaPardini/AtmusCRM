import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'atm-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor() { }

  public scrollToSection(section: string) {
    const element = document.getElementById(section);
    const anchors = document.querySelectorAll('.anchor');
    anchors.forEach(anchor => anchor.classList.remove('active'));

    const clickedAnchor = document.querySelector(`a[href="#${section}"]`);
    if (clickedAnchor) {
      clickedAnchor.classList.add('active');
    }
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  ngOnInit() {


  }
}