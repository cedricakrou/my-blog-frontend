import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from "../../about.me/about-me.component";
import { ContactsComponent } from "../../contacts/contacts.component";
import { ExperiencesComponent } from "../../experiences/experiences.component";
import { NotFoundComponent } from "../../not.found/not-found.component";
import { ResumeComponent } from "../../resume/resume.component";
import { WorksComponent } from "../../works/works.component";
import { RouteNameHelper } from "./route-name.helper";


/**
 *  Initialization class for the website navigation.
 * 
 *  KAKOU Akrou Cedric
 **/


const routes: Routes = [
    {path: '', component: AboutMeComponent},
    {path: RouteNameHelper.aboutMe, component: AboutMeComponent},
    {path: RouteNameHelper.experiences, component: ExperiencesComponent},
    {path: RouteNameHelper.works, component: WorksComponent},
    {path: RouteNameHelper.contacts, component: ContactsComponent},  
    {path: RouteNameHelper.resume, component: ResumeComponent},  
    {path: RouteNameHelper.notFound, component: NotFoundComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}