import * as React from 'react';
import { noop } from 'shared/helpers';

export const DropDownContext = React.createContext<() => void>(noop);
