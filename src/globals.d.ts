export {}; // ensure this is a module

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <R>(a: R) => R;
  }

  interface Navigator {
    userLanguage?: string;
  }
}
