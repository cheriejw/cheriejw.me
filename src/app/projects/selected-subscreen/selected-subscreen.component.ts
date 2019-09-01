import { Component, OnInit, Input } from '@angular/core';
import { ProjectSubject } from '../projects.component.model';

@Component({
  selector: 'app-selected-subscreen',
  templateUrl: './selected-subscreen.component.html',
  styleUrls: ['./selected-subscreen.component.scss']
})
export class SelectedSubscreenComponent implements OnInit {
  @Input() onCloseSubScreen: Function;
  @Input() selectedItemID: String;
  currentHTML: String;
  onListItemClick: Function;
  projectSubject: ProjectSubject;

  // Contructor is executed before @Input().
  constructor() {
  }

  ngOnInit() {
    this.projectSubject = require('app/projects/project-data/' + this.selectedItemID + '/subject-info.json');
    this.currentHTML = require('app/projects/project-data/' + this.selectedItemID + '/index.html');
    this.onListItemClick = (_, id) => {
      this.currentHTML = require('app/projects/project-data/' + this.selectedItemID + '/' + id + '/index.html');
    };
  }

}
