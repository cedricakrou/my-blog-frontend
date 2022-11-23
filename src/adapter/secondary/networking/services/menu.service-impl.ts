import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { MenuRepository } from "src/core/application/repository/menu.repository";
import { MenuService } from "src/core/application/services/menu.service";
import { Menu } from "src/core/domain/entities/menu.entities";
import { MenuRepositoryMock } from "../repositories/mock/menu.repository-mock";

@Injectable({
    providedIn: 'root',
})
export class MenuServiceImpl implements MenuService{
    
    menuRepository!: MenuRepository;

    constructor(menuRepository: MenuRepositoryMock){
        this.menuRepository = menuRepository;
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
}