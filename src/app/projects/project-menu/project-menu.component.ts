import { Component, OnInit, Input } from '@angular/core';
import { ProjectSubject } from '../projects.component.model';

/**
 * Project Menu Component is used to display a list of projects.
 *
 * If the provided {@link ProjectSubject} does not contain a title that is of greater than 0 length,
 * this component will just render the projectList.
 *
 * @param projectSubject Required field. Used to populate the list.
 * @param onListItemClick Optional field. Executes this function on any list item click and sends index
 *   as first parameter, with specific project's id as second parameter. i.e.
 *   `<h4 (click)="onListItemClick(index, project.id)">{{project.title}}</h4>`
 *
 * @param index Optional field. Initially used to determine which (of many) projectSubjects this menu
 *   represents.
 */
@Component({
  selector: 'app-project-menu',
  templateUrl: './project-menu.component.html',
  styleUrls: ['./project-menu.component.scss']
})
export class ProjectMenuComponent implements OnInit {

  @Input() projectSubject: ProjectSubject;
  @Input() onListItemClick: Function;
  @Input() index: Number;

  constructor() {
    this.onListItemClick = () => {};
    this.projectSubject = {title: '', projectList: []};
  }

  ngOnInit() {
  }

}
