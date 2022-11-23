import { SocialMedia } from "src/core/domain/entities/social-media.entities";

/**
 * Service of domain entitie {@link SocialMedia}.
 * 
 * KAKOU Akrou Cedric
 */
export interface SocialMediaService{
    getAllSocialMedias() : SocialMedia[];
}