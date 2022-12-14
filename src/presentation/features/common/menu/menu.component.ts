import { Component, OnInit } from '@angular/core';;
import { Menu } from 'src/core/domain/entities/menu.entities';
import { User } from 'src/core/domain/entities/user.entities';
import { SharedPreferences } from 'src/presentation/helper/variable.global';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  user!: User;

  ngOnInit(): void {
      this.user = SharedPreferences.user;
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
