import { Component, OnInit } from '@angular/core';
import { MainFacade } from 'src/core/application/facade/main.facade';
import { User } from 'src/core/domain/entities/user.entities';
import { SharedPreferences } from '../helper/variable.global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedPreferences]
})
export class AppComponent implements OnInit {

  private user!: User;
  private mainFacade!: MainFacade;

  constructor(mainFacade: MainFacade){
    this.mainFacade = mainFacade;
  }
  ngOnInit(): void {
    this.user = this.mainFacade.signIn("cedricakrou", "open");
    SharedPreferences.user = this.user;
  }

}