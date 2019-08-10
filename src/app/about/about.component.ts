import { Component, OnInit } from '@angular/core';
import { WritingStructure } from 'app/shared/models/writing-structure.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: WritingStructure;

  constructor() {
    this.about = {
      title: 'Hello, my name is Cherie.',
      subtitle: '',
      content: `I specialize in Web Development, and I am passionate about general design.
        I spend my free resources playing (video | tabletop | non-contact sport) games,
        creating traditional art pieces, and reading children's books.`
    };
  }

  ngOnInit() { }

}
