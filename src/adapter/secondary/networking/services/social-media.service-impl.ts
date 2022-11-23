import { SocialMediaRepository } from "src/core/application/repository/social-media.repository";
import { SocialMediaService } from "src/core/application/services/social-media.service";
import { SocialMedia } from "src/core/domain/entities/social-media.entities";
import { SocialMediaRepositoryMock } from "../repositories/mock/social-media.repository-mock";

export class SocialMediaServiceImpl implements SocialMediaService{
   
    
    private socialMediaRepository!: SocialMediaRepository;

    constructor (socialMediaRepository: SocialMediaRepositoryMock) {
        this.socialMediaRepository = socialMediaRepository;
    }


   getAllSocialMedias(): SocialMedia[] {

    var socialMedias: SocialMedia[] = [];

    this.socialMediaRepository.findAll().subscribe({
        next(value: SocialMedia) : void {
            socialMedias.push(value);
        },
        error(err: Error) : void {
            throw new Error("Error while loading menus !");
        }
    });

    return socialMedias;
    }
}