import { Component, OnInit } from "@angular/core";
import { MainFacade } from "src/core/application/facade/main.facade";
import { SocialMedia } from "src/core/domain/entities/social-media.entities";

@Component({
    selector: 'social-media-component',
    templateUrl: './social-media.component.html',
    styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

    public socialMedias: SocialMedia[] = [];

    private mainFacade!: MainFacade;

    constructor(mainFacade: MainFacade){
        this.mainFacade = mainFacade;
    }

    ngOnInit(): void {
        this.socialMedias = this.mainFacade.getAllSocialMedias();
    }
} 