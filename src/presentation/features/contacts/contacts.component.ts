import { Component, OnInit } from "@angular/core";
import { User } from "src/core/domain/entities/user.entities";
import { SharedPreferences } from "src/presentation/helper/variable.global";

@Component({
    selector: 'contacts-root',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{
    
    user!: User;

    ngOnInit(): void {
        this.user = SharedPreferences.user;
    }
}