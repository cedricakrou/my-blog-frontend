import { AppComponent } from './app.component';
import { AboutMeComponent } from './about.me/about-me.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ResumeComponent } from './resume/resume.component';
import { WorksComponent } from './works/works.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './common/menu/menu.component';
import { SocialMediaComponent } from './common/social.media/social-media.component';
import { SocialMediaButton } from '../libs/button/social-media/social-media.button';
import { AppRoutingModule } from './common/routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactsComponent,
    ExperiencesComponent,
    ResumeComponent,
    WorksComponent,
    MenuComponent,
    SocialMediaComponent,
    SocialMediaButton,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
