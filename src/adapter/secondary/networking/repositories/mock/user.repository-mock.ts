import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { UserRepository } from "src/core/application/repository/user.repository";
import { User } from "src/core/domain/entities/user.entities";
import { Address } from "src/core/domain/valueobjects/address.value-object";
import { Role } from "src/core/domain/valueobjects/role.value-object";
import { v4 as uuidv4 } from 'uuid';
import { ExperienceFakeData } from "./fake.data/experience.fake-data";
import { MenuFakeData } from "./fake.data/menu.fake-data";
import { ServiceFakeData } from "./fake.data/service.fake-data";
import { SocialMediaFakeData } from "./fake.data/social-media.fake-data";
import { WorkFakeData } from "./fake.data/work.fake-data";

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
            phone: ["+2250709882886", "+22540746469"],
            address: address,
            role: role,
            menus: new MenuFakeData().datas(),
            socialMedias: new SocialMediaFakeData().datas(),
            experiences: new ExperienceFakeData().datas(),
            currentJob: new ExperienceFakeData().cinetpay,
            services: new ServiceFakeData().datas(),
            briefDescription: "Passioné de développement d'applications 💻 et Formula Ona (F1) Addicte 🏎️.",
            workDescription: "Je suis un ingénieur génie logiciel specialisé dans la conception et la création de solutions (Web & Mobile) digitales.",
            works: new WorkFakeData().datas(),
            cvLink: "CV_KAKOU_AKROU_CEDRIC.pdf"
        };

        return of(user);
    }
}