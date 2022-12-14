import { Address } from "../valueobjects/address.value-object";
import { Role } from "../valueobjects/role.value-object";
import { Experience } from "./experience.entities";
import { Menu } from "./menu.entities";
import { ServiceEntity } from "./service.entities";
import { SocialMedia } from "./social-media.entities";

/**
 * Entity domain of User.
 * 
 * KAKOU Akrou Cedric
 */
export interface User{
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string[];
    address: Address;
    role: Role;
    menus: Menu[];
    experience: Experience[];
    socialMedias: SocialMedia[];
    services: ServiceEntity[];
    briefDescription: string;
    workDescription: string;
    currentJob: Experience;
}