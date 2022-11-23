/**
 * Entitie domain of Menu.
 * 
 * KAKOU Akrou Cedric
 */
export class Menu{
    id:  | undefined;
    label: string = "";
    description: string = "";
    order: number | undefined;
    isVisible: boolean = true;
    subMenus : Menu[] = [];
}