import { ServiceEntity } from "src/core/domain/entities/service.entities";

/**
 * Service of domain entitie {@link ServiceEntity}.
 * 
 * KAKOU Akrou Cedric
 */
 export interface ServicesService{
    getAllServices() : ServiceEntity[];
}