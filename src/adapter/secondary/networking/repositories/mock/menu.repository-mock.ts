import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MenuRepository } from "src/core/application/repository/menu.repository";
import { Menu } from "src/core/domain/entities/menu.entities";
import { RouteNameHelper } from "src/presentation/features/common/routing/route-name.helper";

@Injectable({
    providedIn: 'root',
})
export class MenuRepositoryMock implements MenuRepository{
   
    findAll(): Observable<Menu> {

        const aboutMe: Menu = 
            {
                id: "1",
                label: "About Me",
                description: "Informations of user",
                order: 0,
                isVisible: true,
                subMenus: [],
                link: RouteNameHelper.aboutMe
            };


        const experience: Menu  =  {
                id: "2",
                label: "Experience",
                description: "Experience of user",
                order: 1,
                isVisible: true,
                subMenus: [],
                link: RouteNameHelper.experiences
            };


        const works: Menu  = {
                id: "3",
                label: "Works",
                description: "Works of user",
                order: 2,
                isVisible: true,
                subMenus: [],
                link: RouteNameHelper.works
            };
        
        const contact: Menu  =  {
                id: "4",
            label: "Contact",
            description: "Contact of user",
            order: 3,
            isVisible: true,
            subMenus: [],
            link: RouteNameHelper.contacts
            };

        const resume: Menu = {
            id: "5",
            label: "Resume",
            description: "Resume of user",
            order: 4,
            isVisible: true,
            subMenus: [],
            link: RouteNameHelper.resume
            };


        return of(
            aboutMe,
            experience,
            works,
            contact,
            resume
        );

    }

}