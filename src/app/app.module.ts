import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SelectedSubscreenComponent } from './projects/selected-subscreen/selected-subscreen.component';
import { LinkListComponent } from './projects/link-list/link-list.component';
import { ProjectMenuComponent } from './projects/project-menu/project-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent,
    SelectedSubscreenComponent,
    LinkListComponent,
    ProjectMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
