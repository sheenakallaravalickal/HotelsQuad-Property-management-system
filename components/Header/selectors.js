import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the headerComponent state domain
 */

const selectHeaderDomain = state =>
    state.headerComponent || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HeaderComponent
 */

const makeSelectHeader = () =>
    createSelector(
        selectHeaderDomain,
        substate => substate,
    );

export default makeSelectHeader;
export { selectHeaderDomain };
