/**
 *
 * Asynchronously loads the component for BlankPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
