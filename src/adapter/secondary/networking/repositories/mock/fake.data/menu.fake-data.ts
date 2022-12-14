import { Menu } from "src/core/domain/entities/menu.entities";
import { RouteNameHelper } from "src/presentation/features/common/routing/route-name.helper";
import { v4 as uuidv4 } from 'uuid';
import { IFakeData } from "./fake-data";

export class MenuFakeData implements IFakeData<Menu>{

    private aboutMe: Menu = 
    {
        id: uuidv4(),
        label: "About Me",
        description: "Informations of user",
        order: 0,
        isVisible: true,
        subMenus: [],
        link: RouteNameHelper.aboutMe
    };


    private experience: Menu  =  {
        id: uuidv4(),
        label: "Experience",
        description: "Experience of user",
        order: 1,
        isVisible: true,
        subMenus: [],
        link: RouteNameHelper.experiences
    };


    private works: Menu  = {
        id: uuidv4(),
        label: "Works",
        description: "Works of user",
        order: 2,
        isVisible: true,
        subMenus: [],
        link: RouteNameHelper.works
    };

    private contact: Menu  =  {
        id: uuidv4(),
    label: "Contact",
    description: "Contact of user",
    order: 3,
    isVisible: true,
    subMenus: [],
    link: RouteNameHelper.contacts
    };

    private resume: Menu = {
    id: uuidv4(),
    label: "Resume",
    description: "Resume of user",
    order: 4,
    isVisible: true,
    subMenus: [],
    link: RouteNameHelper.resume
    };

    public datas(): Menu[] {

        return [
            this.aboutMe,
            this.works,
            this.experience,
            this.contact,
            this.resume
        ];
    }
}