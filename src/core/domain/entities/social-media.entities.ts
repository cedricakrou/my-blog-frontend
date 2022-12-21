import { IEntity } from "./IEntity";

/**
 * Entitie domain of Social Media.
 * 
 * KAKOU Akrou Cedric
 */
export interface SocialMedia extends IEntity{
    label: string;
    link: string;
    content:string;
    isActive: boolean;
    imageUrl: string;
    imageDraw: string
}