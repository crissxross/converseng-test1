import { ActionReducer, Action } from '@ngrx/store';

/**
 * NGRX
 * Create a reducer function for each data type you have
 * in your application. The combination of these reducers
 * will make up your application state.
 */

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const counterReducer: ActionReducer<number> = (state, action: Action) => {
  // initialState provided in app.module .provideStore

  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
};
