import { Observable } from "rxjs";
import { ServiceEntity } from "src/core/domain/entities/service.entities";

/**
 * Repository of domain entitie {@link ServiceEntity}.
 * 
 * KAKOU Akrou Cedric
 */
export interface ServiceRepository{
    findAll(): Observable<ServiceEntity>
}