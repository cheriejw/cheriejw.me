import { Component, OnInit, Input } from '@angular/core';
import { ProjectSubject } from '../projects.component.model';

/**
 * Project Menu Component is used to display a list of projects.
 *
 * If the provided {@link ProjectSubject} does not contain a title that is of greater than 0 length,
 * this component will just render the projectList.
 */
@Component({
  selector: 'app-project-menu',
  templateUrl: './project-menu.component.html',
  styleUrls: ['./project-menu.component.scss']
})
export class ProjectMenuComponent implements OnInit {

  @Input() project: ProjectSubject;

  constructor() { }

  ngOnInit() {
  }

}
