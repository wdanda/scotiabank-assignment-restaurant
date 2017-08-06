import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Observable }        from 'rxjs';

import { MenuService }       from 'app/services/menu.service'
import { MenuItem }          from 'app/model/menu-item.model';

@Component({
  selector: 'scotia-restaurant-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  type       : string;
  appetizers : Observable<MenuItem[]>;
  mainCourses: Observable<MenuItem[]>;

  constructor(private menuService: MenuService
            , private route: ActivatedRoute) { }

  ngOnInit() {
    this.appetizers  = this.menuService.getAppetizers();
    this.mainCourses = this.menuService.getMainCourses();

    // Reads from paramter, used to highlight the selected menu
    this.route.params.subscribe(params => {
       this.type = params['type'];
    });

  }

}
