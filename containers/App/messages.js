/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.App';

export default defineMessages({
  adduser: {
    id: `${scope}.adduser`,
    defaultMessage: 'Add user',
  },
  fristName: {
    id: `${scope}.fristName`,
    defaultMessage: 'Frist Naame',
  },
  lastName: {
    id: `${scope}.lastName`,
    defaultMessage: 'Last Naame',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  phone: {
    id: `${scope}.phone`,
    defaultMessage: 'Phone',
  },
  role: {
    id: `${scope}.role`,
    defaultMessage: 'Role',
  },
  user: {
    id: `${scope}.user`,
    defaultMessage: 'user',
  },
  admin: {
    id: `${scope}.admin`,
    defaultMessage: 'Admin',
  },
  save: {
    id: `${scope}.save`,
    defaultMessage: 'Save',
  },
});
