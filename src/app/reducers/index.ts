import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap
  } from '@ngrx/store';
  import * as fromTodo from './todo.reducers';
  export const reducers: ActionReducerMap<any> = {
    todo: fromTodo.todoReducer
  };

  export const selectTodoState = createFeatureSelector<fromTodo.State>('todo');

  export const { selectAll: selectAllTodos } = fromTodo.todoAdapter.getSelectors(
    selectTodoState
  );
