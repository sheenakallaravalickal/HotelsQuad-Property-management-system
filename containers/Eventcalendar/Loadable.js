/**
 *
 * Asynchronously loads the component for Eventcalendar
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
