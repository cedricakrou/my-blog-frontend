import { Injectable } from "@angular/core";
import { MenuRepositoryMock } from "src/adapter/secondary/networking/repositories/mock/menu.repository-mock";
import { SocialMediaRepositoryMock } from "src/adapter/secondary/networking/repositories/mock/social-media.repository-mock";
import { MenuRepository } from "src/core/application/repository/menu.repository";
import { SocialMediaRepository } from "src/core/application/repository/social-media.repository";
import { Menu } from "src/core/domain/entities/menu.entities";
import { SocialMedia } from "src/core/domain/entities/social-media.entities";

@Injectable({
    providedIn: 'root',
})
export class MainFacade implements MainFacade {
    
    private socialMediaRepository!: SocialMediaRepository;
    private menuRepository!: MenuRepository;

    constructor(
        menuRepository: MenuRepositoryMock,
        socialMediaRepository: SocialMediaRepositoryMock){
        this.menuRepository = menuRepository;
        this.socialMediaRepository = socialMediaRepository;
    }

    getAllMenus(): Menu[] {
        
        var menus: Menu[] = [];

        this.menuRepository.findAll().subscribe({
            next(value: Menu): void {
              menus.push(value); 
            },
            error(err: Error) : void{
                throw new Error("Error while loading menus !");
            }
        })
        

        return menus;
    }

    getAllSocialMedias(): SocialMedia[] {

        var socialMedias: SocialMedia[] = [];
    
        this.socialMediaRepository.findAll().subscribe({
            next(value: SocialMedia) : void {
                socialMedias.push(value);
            },
            error(err: Error) : void {
                throw new Error("Error while loading menus !");
            }
        });
    
        return socialMedias;
        }
}