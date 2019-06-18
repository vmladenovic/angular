import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
import { Resolve } from '@angular/router';

@Injectable()
export class PaginationResolver implements Resolve<any> {

  constructor(private apiService: ApiService) {}

  resolve() {
    return this.apiService.fetchPaginationInfo();
  }

}
