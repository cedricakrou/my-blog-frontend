import { Component, OnInit } from "@angular/core";
import { ServiceEntity } from "src/core/domain/entities/service.entities";
import { SharedPreferences } from "src/presentation/helper/variable.global";

@Component({
    selector: "about-me-root",
    templateUrl: "./about-me.component.html",
    styleUrls: ["./about-me.component.css"],
})
export class AboutMeComponent implements OnInit{

    services!: ServiceEntity[];

    ngOnInit(): void {
        this.services = SharedPreferences.user.services;
    }

}