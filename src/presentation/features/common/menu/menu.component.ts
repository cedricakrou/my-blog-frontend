import { Component, OnInit } from '@angular/core';;
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
      this.menus = SharedPreferences.user.menus
      this.menus.sort(this.compare);
  }

  compare( a: Menu , b: Menu){

    const aOrder: number = a.order;
    const bOrder  : number= b.order;

    if(aOrder > bOrder){
      return 1;
    } 
    else if(aOrder < bOrder){
      return -1;
    } 
    return 0;
  }
}
