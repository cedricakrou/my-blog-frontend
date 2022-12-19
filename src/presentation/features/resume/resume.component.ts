import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { User } from "src/core/domain/entities/user.entities";
import { SharedPreferences } from "src/presentation/helper/variable.global";

@Component({
    selector: 'resume-root',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']

})
export class ResumeComponent implements OnInit {
   
    user!: User;

    ngOnInit(): void {
        this.user = SharedPreferences.user;
    }
}