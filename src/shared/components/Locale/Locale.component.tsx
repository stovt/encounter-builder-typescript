import * as React from 'react';
import { IntlProvider } from 'react-intl';
import ru from 'public/data/locales/ru.json';
import { flattenMessages } from './Locale.helpers';
import { DEFAULT_LOCALE } from './Locale.constants';

const locales: Record<string, {}> = { ru };

const userLanguage =
  (navigator.languages && navigator.languages.length && navigator.languages[0].split('-')[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  DEFAULT_LOCALE;

const locale = locales[userLanguage] ? userLanguage : DEFAULT_LOCALE;

const messages = flattenMessages(locales[locale]);

const Locale: React.FC = ({ children }) => (
  <IntlProvider locale={locale} messages={messages}>
    <React.Fragment>{children}</React.Fragment>
  </IntlProvider>
);

export default Locale;
