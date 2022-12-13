import { Injectable } from "@angular/core";
import { MenuRepositoryMock } from "src/adapter/secondary/networking/repositories/mock/menu.repository-mock";
import { ServiceRepositoryMock } from "src/adapter/secondary/networking/repositories/mock/service.repository-mock";
import { SocialMediaRepositoryMock } from "src/adapter/secondary/networking/repositories/mock/social-media.repository-mock";
import { MenuRepository } from "src/core/application/repository/menu.repository";
import { SocialMediaRepository } from "src/core/application/repository/social-media.repository";
import { Menu } from "src/core/domain/entities/menu.entities";
import { ServiceEntity } from "src/core/domain/entities/service.entities";
import { SocialMedia } from "src/core/domain/entities/social-media.entities";
import { ServiceRepository } from "../repository/service.repository";

@Injectable({
    providedIn: 'root',
})
export class MainFacade {
    
    private socialMediaRepository!: SocialMediaRepository;
    private menuRepository!: MenuRepository;
    private serviceRepository!: ServiceRepository;

    constructor(
        menuRepository: MenuRepositoryMock,
        socialMediaRepository: SocialMediaRepositoryMock,
        serviceRepository: ServiceRepositoryMock){
        this.menuRepository = menuRepository;
        this.socialMediaRepository = socialMediaRepository;
        this.serviceRepository = serviceRepository;
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

        getAllServices(): ServiceEntity[] {

            var services: ServiceEntity[] = [];
        
            this.serviceRepository.findAll().subscribe({
                next(value: ServiceEntity) : void {
                    services.push(value);
                },
                error(err: Error) : void {
                    throw new Error("Error while loading menus !");
                }
            });
        
            return services;
        }
}