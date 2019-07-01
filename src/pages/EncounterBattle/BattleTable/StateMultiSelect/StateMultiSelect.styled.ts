import { Styles } from 'react-select/src/styles';
import { theme } from 'styles';

export const customStyles: Styles = {
  container: base => ({
    ...base,
    width: '100%'
  }),
  control: (base, { selectProps: { menuIsOpen }, isFocused }) => ({
    ...base,
    borderRadius: menuIsOpen ? '4px 4px 0 0' : 4,
    borderColor: isFocused ? theme.colors.input.focusBorder : theme.colors.input.border,
    boxShadow: isFocused ? '0 4px 16px 0 '.concat(theme.colors.input.focusShadow) : undefined,
    backgroundColor: theme.colors.white,
    '&:hover': {
      borderColor: isFocused ? theme.colors.input.focusBorder : theme.colors.input.border,
      boxShadow: isFocused ? '0 4px 16px 0 '.concat(theme.colors.input.focusShadow) : undefined
    }
  }),
  dropdownIndicator: (base, { selectProps: { menuIsOpen } }) => ({
    ...base,
    transition: 'all .2s ease',
    transform: menuIsOpen ? 'rotate(180deg)' : undefined
  }),
  menu: base => ({
    ...base,
    margin: 0,
    borderRadius: '0 0 4px 4px'
  }),
  menuList: base => ({
    ...base,
    padding: 0
  }),
  multiValueLabel: base => ({
    ...base,
    whiteSpace: 'normal'
  })
};
