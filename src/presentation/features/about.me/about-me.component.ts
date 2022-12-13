import { Component, OnInit } from "@angular/core";
import { MainFacade } from "src/core/application/facade/main.facade";
import { ServiceEntity } from "src/core/domain/entities/service.entities";

@Component({
    selector: "about-me-root",
    templateUrl: "./about-me.component.html",
    styleUrls: ["./about-me.component.css"],
})
export class AboutMeComponent implements OnInit{
    
    private mainFacade!: MainFacade;
    services!: ServiceEntity[];

    constructor(
        mainFacade: MainFacade
    ){
        this.mainFacade = mainFacade;
    }

    ngOnInit(): void {
        this.services = this.mainFacade.getAllServices();
    }

}