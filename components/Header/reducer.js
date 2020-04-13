/*
 *
 * HeaderComponent reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

/* eslint-disable default-case, no-param-reassign */

export const initialState = {};

const headerReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default headerReducer;
