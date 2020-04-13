/**
 *
 * Asynchronously loads the component for ChatApp
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
