import { Component, OnInit } from '@angular/core';
import { ProjectSubject } from './projects.component.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
/**
 * @summary Displays exactly 3 project subjects and drills down.
 */
export class ProjectsComponent implements OnInit {
  projectSubjects: ProjectSubject[];

  constructor() {
    this.projectSubjects = [
      { // SOFTWARE
        title: 'Software',
        projectList: [
          {title: 'Web Applications', imageURL: 'assets/img/face.jpg'}
        ]
      }, { // ART&DESIGN
        title: 'Art&Design',
        projectList: [
          {title: 'Wireframes', imageURL: ''}
        ]
      }, { // RECREATIONAL
        title: 'Recreational',
        projectList: [
          {title: 'Twitch Streams', imageURL: ''},
          {title: 'Raspberry Pi Projects', imageURL: ''}
        ]
      }
    ];
  }

  ngOnInit() {
  }

}
