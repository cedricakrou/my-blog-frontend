import { Address } from "../valueobjects/address.value-object";
import { Role } from "../valueobjects/role.value-object";
import { Menu } from "./menu.entities";

/**
 * Entitie domain of User.
 * 
 * KAKOU Akrou Cedric
 */
export class User{
    id: string | undefined;
    firstname: string = "";
    lastname: string = "";
    email: string = "";
    phone: string = "";
    address: Address | undefined;
    role: Role | undefined;
    menus: Menu[] = [];
}