import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Button } from "../button.component"

@Component({
    selector: 'social-media-button',
    templateUrl: "./social-media.template.html"
})
export class SocialMediaButton extends Button{

    private router: Router;

    public link: string = "#";
    public target: string = "_self";
    
    constructor(router: Router){
        super();
        this.router = router;
    }
    
    click(): void {
        const url = this.router.createUrlTree([this.link]);

 //       window.open(url, this.target);
    }
}