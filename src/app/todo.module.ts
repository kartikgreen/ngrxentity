import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { todoReducer } from './reducers/todo.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('todo', todoReducer)
  ],
  declarations: []
})
export class TodoModule {}
