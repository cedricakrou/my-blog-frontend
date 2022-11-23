/**
 * Entitie domain of Menu.
 * 
 * KAKOU Akrou Cedric
 */
export interface Menu{
    id: string  | undefined;
    label: string;
    description: string;
    order: number | undefined;
    isVisible: boolean;
    subMenus : Menu[];
}