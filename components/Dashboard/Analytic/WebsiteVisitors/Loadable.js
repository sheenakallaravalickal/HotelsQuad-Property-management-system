/**
 *
 * Asynchronously loads the component for WebsiteVisitors
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
