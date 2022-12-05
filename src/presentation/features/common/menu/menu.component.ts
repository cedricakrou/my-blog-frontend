import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainFacade } from 'src/core/application/facade/main.facade';
import { Menu } from 'src/core/domain/entities/menu.entities';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  
  private router: Router;

  private mainFacade!: MainFacade;
  menus : Menu[] = [];

  constructor(
      mainFacade: MainFacade,
      router: Router
      ){
      this.mainFacade = mainFacade;
      this.router = router;
  }
  ngOnInit(): void {
      this.menus = this.mainFacade.getAllMenus();

      // TODO : definie route dynamically with Router of Anguler
  }
}
