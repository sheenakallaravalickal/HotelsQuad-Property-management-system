/**
 *
 * Asynchronously loads the component for Route
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
