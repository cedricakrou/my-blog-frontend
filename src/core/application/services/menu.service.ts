import { Injectable } from "@angular/core";
import { Menu } from "src/core/domain/entities/menu.entities";

/**
 * Service of domain entitie {@link Menu}.
 * 
 * KAKOU Akrou Cedric
 */
export interface MenuService{
    getAllMenus() : Menu[];
}