/**
 *
 * Asynchronously loads the component for PopupChat
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
