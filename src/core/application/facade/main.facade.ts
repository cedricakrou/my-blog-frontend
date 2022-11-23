import { Injectable } from "@angular/core";
import { MenuService } from "../services/menu.service";
import { SocialMediaService } from "../services/social-media.service";

@Injectable({
    providedIn: 'root',
})
export interface MainFacade extends MenuService, SocialMediaService {

}