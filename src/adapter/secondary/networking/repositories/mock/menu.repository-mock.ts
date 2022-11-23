import { Observable, of } from "rxjs";
import { MenuRepository } from "src/core/application/repository/menu.repository";
import { Menu } from "src/core/domain/entities/menu.entities";

export class MenuRepositoryMock implements MenuRepository{
   
    findAll(): Observable<Menu> {

        const aboutMe: Menu = 
            {
                id: "1",
                label: "About Me",
                description: "Informations of user",
                order: 0,
                isVisible: true,
                subMenus: []
            };


        const experience: Menu  =  {
                id: "2",
                label: "Experience",
                description: "Experience of user",
                order: 1,
                isVisible: true,
                subMenus: []
            };


    const works: Menu  = {
                id: "3",
                label: "Works",
                description: "Works of user",
                order: 2,
                isVisible: true,
                subMenus: []
            };
        
            const contact: Menu  =  {
                id: "4",
                label: "Contact",
                description: "Contact of user",
                order: 3,
                isVisible: true,
                subMenus: []
            };
            const resume: Menu = {
                id: "5",
                label: "Resume",
                description: "Resume of user",
                order: 4,
                isVisible: true,
                subMenus: []
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