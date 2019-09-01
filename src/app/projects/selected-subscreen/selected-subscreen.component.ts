import { Component, OnInit, Input} from '@angular/core';
import { ProjectSubject } from '../projects.component.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-selected-subscreen',
  templateUrl: './selected-subscreen.component.html',
  styleUrls: ['./selected-subscreen.component.scss']
})
export class SelectedSubscreenComponent implements OnInit {
  @Input() onCloseSubScreen: Function;
  @Input() selectedItemID: String;
  // Parameters passed into the project menu component on the navigational portion of the selected subscreen.
  onListItemClickFinal: Function;
  onListItemClickInitial: Function;
  // The HTML content to be displayed on the lower portion of the selected subscreen.
  currentHTML: SafeHtml;
  // Current subproject ID.
  currentsubProjectID: String;

  projectSubject: ProjectSubject;
  subProjectSubject: ProjectSubject;

  // Contructor is executed before @Input().
  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.projectSubject = require('app/projects/project-data/' + this.selectedItemID + '/subject-info.json');
    this.currentHTML = require('app/projects/project-data/' + this.selectedItemID + '/index.html');

    this.onListItemClickFinal = (_, id) => {
      this.currentHTML = this.sanitizer.bypassSecurityTrustHtml(require(
        'app/projects/project-data/' + this.selectedItemID + '/' + this.currentsubProjectID + '/' + id + '.html'));
    };

    this.onListItemClickInitial = (_, id) => {
      this.currentsubProjectID = id;
      this.currentHTML = require('app/projects/project-data/' + this.selectedItemID + '/' + id + '/index.html');
      this.subProjectSubject = require('app/projects/project-data/' + this.selectedItemID + '/' + id + '/subject-info.json');
    };
  }

}
