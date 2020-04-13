/**
 *
 * Asynchronously loads the component for TextEditor
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
