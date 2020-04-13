/**
 *
 * Asynchronously loads the component for Inbox
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
