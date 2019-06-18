import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../../core/services';
import { UserInterface } from '../../../interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class UsersResolver implements Resolve<any> {

  constructor(private apiService: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<UserInterface[]> | Promise<UserInterface[]> | UserInterface[] {
    console.log("Resolver", route);
    const page: number = route.queryParams['page'] || 1;
    return this.apiService.fetchUsers(page);
  }

}
