import { Observable } from "rxjs";

/**
 * Repository of domain entitie {@link Employment}.
 * 
 * KAKOU Akrou Cedric
 */
export interface Employment{
    findAllByUser(id:string): Observable<Employment>;
}