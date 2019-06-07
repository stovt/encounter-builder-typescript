import * as React from 'react';
import Wrapper from './Wrapper';
import BorderTop from './BorderTop';
import BorderBottom from './BorderBottom';
import { SCROLLBAR_PADDING } from './ModalBodyRow.constants';
import StyledModalBodyRow from './ModalBodyRow.styled';

interface Props {
  scrollable?: boolean;
}

const ModalBodyRow: React.FC<Props> = ({ scrollable = false, children }) => {
  const [shadowTopOpacity, setShadowTopOpacity] = React.useState<number>(0);
  const [shadowBottomOpacity, setShadowBottomOpacity] = React.useState<number>(0);
  const [scrollbarWidth, setScrollbarWidth] = React.useState<number>(0);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = React.useCallback(() => {
    const { current: containerRefCurrent } = containerRef;
    if (containerRefCurrent) {
      const { scrollTop, scrollHeight, clientHeight } = containerRefCurrent;
      setShadowTopOpacity((1 / 20) * Math.min(scrollTop, 20));
      const bottomScrollTop = scrollHeight - clientHeight;
      setShadowBottomOpacity(
        (1 / 20) * (bottomScrollTop - Math.max(scrollTop, bottomScrollTop - 20))
      );
    }
  }, [containerRef]);

  const checkScrollbarWidthOnResize = React.useCallback(() => {
    const { current: containerRefCurrent } = containerRef;
    const { current: childRefCurrent } = childRef;
    if (containerRefCurrent && childRefCurrent) {
      const { offsetWidth: parentWidth } = containerRefCurrent;
      const { offsetWidth: childWidth } = childRefCurrent;
      const newScrollBarWidth = parentWidth - childWidth - SCROLLBAR_PADDING;
      if (newScrollBarWidth !== scrollbarWidth) setScrollbarWidth(newScrollBarWidth);
      handleScroll();
    }
  }, [scrollbarWidth, handleScroll]);

  React.useEffect(() => {
    if (scrollable) {
      const { current: containerRefCurrent } = containerRef;
      const { current: childRefCurrent } = childRef;
      if (containerRefCurrent && childRefCurrent) {
        const { offsetWidth: parentWidth } = containerRefCurrent;
        const { offsetWidth: childWidth } = childRefCurrent;
        setScrollbarWidth(parentWidth - childWidth - SCROLLBAR_PADDING);
        handleScroll();
        window.addEventListener('resize', checkScrollbarWidthOnResize);
      }
    }

    return () => {
      window.removeEventListener('resize', checkScrollbarWidthOnResize);
    };
  }, [scrollable, containerRef, childRef, handleScroll, checkScrollbarWidthOnResize]);

  const paddedScrollbarWidth = React.useMemo(() => scrollbarWidth + SCROLLBAR_PADDING, [
    scrollbarWidth
  ]);

  if (!scrollable) return <div>{children}</div>;

  return (
    <Wrapper scrollbarWidth={paddedScrollbarWidth}>
      <StyledModalBodyRow ref={containerRef} onScroll={handleScroll}>
        <div ref={childRef}>{children}</div>
      </StyledModalBodyRow>
      <BorderTop right={paddedScrollbarWidth} opacity={shadowTopOpacity} />
      <BorderBottom right={paddedScrollbarWidth} opacity={shadowBottomOpacity} />
    </Wrapper>
  );
};

export default ModalBodyRow;
