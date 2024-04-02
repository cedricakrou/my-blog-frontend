import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { UserRepository } from "src/core/application/repository/user.repository";
import { User } from "src/core/domain/entities/user.entities";
import { Address } from "src/core/domain/valueobjects/address.value-object";
import { Role } from "src/core/domain/valueobjects/role.value-object";
import { v4 as uuidv4 } from 'uuid';
import { ExperienceSimulator } from "./backend-simulator/experience.backend-simulator";
import { MenuSimulator } from "./backend-simulator/menu.backend-simulator";
import { ServiceSimulator } from "./backend-simulator/service.backend-simulator";
import { SocialMediaSimulator } from "./backend-simulator/social-media.backend-simulator";
import { WorkSimulator } from "./backend-simulator/work.backend-simulator";

@Injectable({
    providedIn: 'root',
})
export class UserRepositoryMock implements UserRepository{

    signIn(username: string, password: string): Observable<User> {

        const address: Address = {
            city:"Abidjan",
            nativeCountry: "Côte d'ivoire",
            liveCountry: "Côte d'ivoire"
        };

        const role: Role = {
            id: uuidv4(),
            label: "ADMIN",
            permissions: []
        };

        const user: User = {
            id: uuidv4(),
            firstname : "Akrou Cedric",
            lastname: "KAKOU",
            email: "cedricakroustudy@gmail.com",
            phones: ["+2250709882886", "+2250140746469"],
            address: address,
            role: role,
            menus: new MenuSimulator().datas(),
            socialMedias: new SocialMediaSimulator().datas(),
            experiences: new ExperienceSimulator().datas(),
            currentJob: new ExperienceSimulator().cinetpay,
            services: new ServiceSimulator().datas(),
            briefDescription: "Passioné de développement d'applications 💻 et Formula Ona (F1) Addicte 🏎️.",
            workDescription: "Je suis un ingénieur génie logiciel specialisé dans la conception et la création de solutions (Web & Mobile) digitales.",
            works: new WorkSimulator().datas(),
            cvLink: "CV_KAKOU_AKROU_CEDRIC.pdf"
        };

        return of(user);
    }
}
