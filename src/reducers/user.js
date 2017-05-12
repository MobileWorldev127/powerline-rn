/**
 *
 * @flow
 */

'use strict';

import type {Action } from '../actions/types';

export type State = {
  isLoggedIn: boolean;
  is_registration_complete: ?boolean;
  id: ?string;
  username: ?string;
  token: ?string;
};

const initialState = {
  isLoggedIn: false,
  is_registeration_complete: null,
  id: null,
  username: null,
  token: null,
};

function user(state: State = initialState, action: Action): State {
  if (action.type === 'LOGGED_IN') {
    let { id, username, token } = action.data;
    return {
      isLoggedIn: true,
      token,
      id,
      username,
    };
  }
  if (action.type === 'LOGGED_OUT') {
    return initialState;
  }
  return state;
}

module.exports = user;
