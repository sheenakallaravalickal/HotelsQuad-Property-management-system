/**
 *
 * Asynchronously loads the component for AddBooking
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));