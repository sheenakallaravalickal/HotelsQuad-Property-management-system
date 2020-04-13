/**
 *
 * Asynchronously loads the component for LiveChat
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
