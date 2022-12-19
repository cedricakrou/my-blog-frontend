import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { User } from "src/core/domain/entities/user.entities";
import { SharedPreferences } from "src/presentation/helper/variable.global";

@Component({
    selector: 'works-root',
    templateUrl: './works.component.html',
    styleUrls: ['./works.component.css'],
})
export class WorksComponent implements OnInit {
    
    user!: User;

    ngOnInit(): void {
        
        this.user = SharedPreferences.user;;
    }
}