import { Component, OnInit } from "@angular/core";
import { MainFacade } from "src/core/application/facade/main.facade";
import { SocialMedia } from "src/core/domain/entities/social-media.entities";
import { SharedPreferences } from "src/presentation/helper/variable.global";
declare var $: any; 

@Component({
    selector: 'social-media-component',
    templateUrl: './social-media.component.html',
    styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

    public socialMedias: SocialMedia[] = [];

    ngOnInit(): void {
        this.socialMedias = SharedPreferences.user.socialMedias;
    }
} 