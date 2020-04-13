/**
 *
 * Asynchronously loads the component for Card
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
