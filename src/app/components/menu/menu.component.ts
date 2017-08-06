import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs';

import { MenuService }       from 'app/services/menu.service'
import { MenuItem }          from 'app/model/menu-item.model';

@Component({
  selector: 'scotia-restaurant-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  appetizers : Observable<MenuItem[]>;
  mainCourses: Observable<MenuItem[]>;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.appetizers  = this.menuService.getAppetizers();
    this.mainCourses = this.menuService.getMainCourses();
  }

}
