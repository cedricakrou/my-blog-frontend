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
                link: "http://",
                isActive: true,
            };


        const linkedIn : SocialMedia = {
                id: "123",
                label: "LinkedIn",
                link: "http://",
                isActive: true,
            };


           const instagram : SocialMedia = {
                id: "123",
                label: "Instagram",
                link: "http://",
                isActive: true,
            }; 

            const twitter : SocialMedia = {
                id: "123",
                label: "Twitter",
                link: "http://",
                isActive: true,
            }; 

        

        return of(
            github,
            linkedIn,
            instagram,
            twitter
        );
    }
}