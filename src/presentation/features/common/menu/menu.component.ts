import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainFacade } from 'src/core/application/facade/main.facade';
import { Menu } from 'src/core/domain/entities/menu.entities';
import { SharedPreferences } from 'src/presentation/helper/variable.global';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  menus : Menu[] = [];

  ngOnInit(): void {
      this.menus = SharedPreferences.user.menus;
  }
}
