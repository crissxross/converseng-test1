import { ActionReducer, Action } from '@ngrx/store';
/**
 * NGRX
 * Create a reducer function for each data type you have
 * in your application. The combination of these reducers
 * will make up your application state.
 */

export const MAIN_ACTORS = 'MAIN_ACTORS';
export const PLAYER_CHARACTERS = 'PLAYER_CHARACTERS';
export const NPCS = 'NPCS';

export const castReducer: ActionReducer<any> = (state = [], action: Action) => {

  switch (action.type) {
    case MAIN_ACTORS:
      return action.payload;

    // case PLAYER_CHARACTERS:
      // return action.payload;

    // case NPCS:
    //   return action.payload;

    default:
      return state;
  }
};

export const playersReducer: ActionReducer<any> = (state = [], action: Action) => {

  switch (action.type) {
    case PLAYER_CHARACTERS:
      return action.payload;

    default:
      return state;
  }
};

export const npcReducer: ActionReducer<any> = (state = [], action: Action) => {

  switch (action.type) {
    case NPCS:
      return action.payload;

    default:
      return state;
  }
};
