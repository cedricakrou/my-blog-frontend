import { Observable } from "rxjs";
import { Menu } from "src/core/domain/entities/menu.entities";

/**
 * Repository of domain entitie {@link Menu}.
 * 
 * KAKOU Akrou Cedric
 */
export interface MenuRepository{
    findAll(): Observable<Menu>
}