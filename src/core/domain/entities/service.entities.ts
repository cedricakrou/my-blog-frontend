import { v4 as uuidv4 } from 'uuid'

/**
 * Entitie domain of Services.
 * 
 * KAKOU Akrou Cedric
 */
export interface ServiceEntity{
    id: string;
    order: number;
    title: string;
    description: string;
    imageUrl: string;
}