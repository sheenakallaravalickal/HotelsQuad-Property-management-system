/**
 *
 * Asynchronously loads the component for TextEditorComponent
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
