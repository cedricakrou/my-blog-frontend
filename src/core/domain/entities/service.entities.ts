import { v4 as uuidv4 } from 'uuid'
import { IEntity } from './IEntity';

/**
 * Entitie domain of Services.
 * 
 * KAKOU Akrou Cedric
 */
export interface ServiceEntity extends IEntity{
    order: number;
    title: string;
    description: string;
    imageUrl: string;
}