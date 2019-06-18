import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { CoreModule } from '../core/core.module';
import { UsersResolver } from './resolvers/users.resolver';
import { PaginationResolver } from './resolvers/pagination.resolver';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    CoreModule.forRoot(),
    UsersListRoutingModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    UsersResolver,
    PaginationResolver
  ]
})
export class UsersListModule { }
