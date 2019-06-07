import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import StyledTitle from 'shared/components/Title';
import StyledLegendItem from './LegendItem';
import StyledLegend from './Legend.styled';
import { LEGEND_ITEMS } from './Legend.constants';

const Legend: React.FC = () => (
  <div>
    <StyledTitle>
      <FormattedMessage id='legend.title' />
    </StyledTitle>
    <StyledLegend>
      {LEGEND_ITEMS.map(legendType => (
        <StyledLegendItem className={`legend-${legendType}`} key={legendType}>
          <FormattedMessage id={`legend.${legendType}`} />
        </StyledLegendItem>
      ))}
    </StyledLegend>
  </div>
);

export default Legend;
