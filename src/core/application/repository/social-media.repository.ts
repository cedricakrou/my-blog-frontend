import { Observable } from "rxjs";
import { SocialMedia } from "src/core/domain/entities/social-media.entities";

/**
 * Repository of domain entitie {@link SocialMedia}.
 * 
 * KAKOU Akrou Cedric
 */
export interface SocialMediaRepository{
    findAll(): Observable<SocialMedia>
}