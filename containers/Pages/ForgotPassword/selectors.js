import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the resetPassword state domain
 */

const selectResetPasswordDomain = state => state.resetPassword || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ResetPassword
 */

const makeSelectResetPassword = () =>
  createSelector(
    selectResetPasswordDomain,
    substate => substate,
  );

export default makeSelectResetPassword;
export { selectResetPasswordDomain };
