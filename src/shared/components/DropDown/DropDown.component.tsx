import * as React from 'react';
import StyledWrapper from './Wrapper';
import DropDownButtonWrapper from './DropDownButtonWrapper';
import { DropDownContext } from './DropDown.context';
import StyledDropDown from './DropDown.styled';

interface Props {
  children: React.ReactNode;
  button: React.ElementType;
}

const DropDown: React.FC<Props> = ({ button: Button, children }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const buttonRef = React.useRef<HTMLDivElement>(null);
  const dropDownRef = React.useRef<HTMLUListElement>(null);

  const toggleDropDown = React.useCallback(() => {
    setOpen(o => !o);
  }, []);
  const closeDropDown = React.useCallback(() => setOpen(false), []);

  const handleClick = React.useCallback(
    (e: Event) => {
      if (
        e.target instanceof Element &&
        ((buttonRef.current && buttonRef.current.contains(e.target)) ||
          (dropDownRef.current && dropDownRef.current.contains(e.target)))
      ) {
        return;
      }

      closeDropDown();
    },
    [closeDropDown]
  );

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClick]);

  return (
    <DropDownContext.Provider value={closeDropDown}>
      <StyledWrapper>
        <DropDownButtonWrapper ref={buttonRef}>
          <Button onClick={toggleDropDown} />
        </DropDownButtonWrapper>
        <StyledDropDown open={open} ref={dropDownRef}>
          {children}
        </StyledDropDown>
      </StyledWrapper>
    </DropDownContext.Provider>
  );
};

export default DropDown;
