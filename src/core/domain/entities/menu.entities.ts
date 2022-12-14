/**
 * Entitie domain of Menu.
 * 
 * KAKOU Akrou Cedric
 */
export interface Menu{
    id: string;
    label: string;
    description: string;
    order: number;
    isVisible: boolean;
    link: string;
    subMenus : Menu[];
}