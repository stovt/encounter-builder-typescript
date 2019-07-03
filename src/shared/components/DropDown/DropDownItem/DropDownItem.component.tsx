import * as React from 'react';
import { DropDownContext } from '../DropDown.context';
import StyledDropDownItem from './DropDownItem.styled';

interface Props {
  onClick: () => void;
}

const DropDownItem: React.FC<Props> = ({ onClick, children }) => {
  const closeDropDown = React.useContext(DropDownContext);

  const handleOnClick = React.useCallback(() => {
    onClick();
    closeDropDown();
  }, [closeDropDown, onClick]);

  return <StyledDropDownItem onClick={handleOnClick}>{children}</StyledDropDownItem>;
};

export default DropDownItem;
