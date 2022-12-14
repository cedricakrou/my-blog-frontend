import { Component, OnInit } from "@angular/core";
import { ServiceEntity } from "src/core/domain/entities/service.entities";
import { User } from "src/core/domain/entities/user.entities";
import { SharedPreferences } from "src/presentation/helper/variable.global";

@Component({
    selector: "about-me-root",
    templateUrl: "./about-me.component.html",
    styleUrls: ["./about-me.component.css"],
})
export class AboutMeComponent implements OnInit{

    user!: User;

    ngOnInit(): void {
        this.user = SharedPreferences.user;
    }

}