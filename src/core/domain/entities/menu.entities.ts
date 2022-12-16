import { IEntity } from "./IEntity";

/**
 * Entitie domain of Menu.
 * 
 * KAKOU Akrou Cedric
 */
export interface Menu extends IEntity{
    label: string;
    description: string;
    order: number;
    isVisible: boolean;
    link: string;
    subMenus : Menu[];
}