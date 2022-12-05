import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SocialMediaRepository } from "src/core/application/repository/social-media.repository";
import { SocialMedia } from "src/core/domain/entities/social-media.entities";

@Injectable({
    providedIn: 'root',
})
export class SocialMediaRepositoryMock implements SocialMediaRepository{
    
    findAll(): Observable<SocialMedia> {
     
        const github : SocialMedia = 
            {
                id: "123",
                label: "Github",
                link: "https://github.com/cedricakrou",
                isActive: true,
                imageUrl: "github.png",
            };


        const linkedIn : SocialMedia = {
                id: "123",
                label: "LinkedIn",
                link: "https://www.linkedin.com/in/kakou-akrou-cedric-052338162/",
                isActive: true,
                imageUrl: "linkedin.png"
            };


           const instagram : SocialMedia = {
                id: "123",
                label: "Instagram",
                link: "https://www.instagram.com/belmondok/",
                isActive: true,
                imageUrl: "instagram.png"
            }; 

            const twitter : SocialMedia = {
                id: "123",
                label: "Twitter",
                link: "https://twitter.com/cedricakrou2",
                isActive: true,
                imageUrl: "twitter.png"
            }; 

        

        return of(
            github,
            linkedIn,
            instagram,
            twitter
        );
    }
}