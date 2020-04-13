/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
const addLocaleData = require('react-intl').addLocaleData; //eslint-disable-line
const enLocaleData = require('react-intl/locale-data/en');
const frLocaleData = require('react-intl/locale-data/fr');
const deLocaleData = require('react-intl/locale-data/de');
const ptLocaleData = require('react-intl/locale-data/pt');

const enTranslationMessages = require('./translations/en.json');
const frTranslationMessages = require('./translations/fr.json');
const deTranslationMessages = require('./translations/de.json');
const ptTranslationMessages = require('./translations/pt.json');

addLocaleData(enLocaleData);
addLocaleData(deLocaleData);
addLocaleData(frLocaleData);
addLocaleData(ptLocaleData);

function setCookie(cname, cvalue) {
    if (typeof window === 'undefined') {
        return;
    }
    document.cookie = `${cname}=${cvalue}`;
}

function getCookie(cname) {
    if (typeof window === 'undefined') {
        return '';
    }
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i += 1) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }

    return '';
}

let cookie = getCookie('ammei_lang');
if (!cookie) {
    cookie = 'en';
    setCookie('ammei_lang', 'en');
}

const DEFAULT_LOCALE = cookie;

// prettier-ignore
const appLocales = [
    'en',
    'de',
    'pt',
];

const formatTranslationMessages = (locale, messages) => {
    const defaultFormattedMessages =
        locale !== DEFAULT_LOCALE
            ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
            : {};
    const flattenFormattedMessages = (formattedMessages, key) => {
        const formattedMessage =
            !messages[key] && locale !== DEFAULT_LOCALE
                ? defaultFormattedMessages[key]
                : messages[key];
        return Object.assign(formattedMessages, { [key]: formattedMessage });
    };
    return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
    en: formatTranslationMessages('en', enTranslationMessages),
    de: formatTranslationMessages('de', deTranslationMessages),
    fr: formatTranslationMessages('fr', frTranslationMessages),
    pt: formatTranslationMessages('pt', ptTranslationMessages),
};

exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
