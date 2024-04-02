import { Component, OnInit } from "@angular/core";
import { User } from "src/core/domain/entities/user.entities";
import { SharedPreferences } from "src/presentation/helper/variable.global";

@Component({
    selector: 'experiences-root',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.css'],
})
export class ExperiencesComponent implements OnInit {

    user!: User;

    ngOnInit(): void {
        this.user = SharedPreferences.user;
    }

}
