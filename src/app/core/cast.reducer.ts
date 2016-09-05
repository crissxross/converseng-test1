import { ActionReducer, Action } from '@ngrx/store';

export const ADD_MAIN_ACTORS = 'ADD_MAIN_ACTORS';
export const ADD_PLAYER_CHARACTERS = 'ADD_PLAYER_CHARACTERS';
export const ADD_NPCS = 'ADD_NPCS';

export const castReducer: ActionReducer<any> = (state = [], action: Action) => {

  switch (action.type) {
    case ADD_MAIN_ACTORS:
      return action.payload;

    case ADD_PLAYER_CHARACTERS:
      return action.payload;

    case ADD_NPCS:
      return action.payload;

    default:
      return state;
  }
};
