import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs';
import                         'rxjs/add/operator/map';

import { MenuItem }       from 'app/model/menu-item.model';


@Injectable()
export class MenuService {

  appetizersUrl : string = '/api/menu-appetizers.json';
  mainCoursesUrl: string = '/api/menu-main-courses.json';

  constructor(private http: Http) { }

  getAppetizers(): Observable<MenuItem[]> {
    return this.http.get(this.appetizersUrl).map((res:Response) => res.json());
  }

  getMainCourses(): Observable<MenuItem[]> {
    return this.http.get(this.mainCoursesUrl).map((res:Response) => res.json());
  }

}
