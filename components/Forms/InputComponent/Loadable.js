/**
 *
 * Asynchronously loads the component for InputComponent
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
