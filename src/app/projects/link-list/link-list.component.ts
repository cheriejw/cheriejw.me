import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../projects.component.model';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {

  @Input() list: Project[];

  constructor() {
  }

  ngOnInit() {
  }

}
