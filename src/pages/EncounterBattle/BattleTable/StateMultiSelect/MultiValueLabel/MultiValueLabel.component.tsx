import * as React from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';
import { StatefulToolTip } from 'react-portal-tooltip';
import { components } from 'react-select';
import { MultiValueProps } from 'react-select/src/components/MultiValue';
import { MonsterStateValue } from 'shared/types/monsters';

interface Props extends MultiValueProps<MonsterStateValue> {
  intl: InjectedIntl;
}

const MultiValueLabel: React.FC<Props> = props => {
  const {
    intl: { formatMessage },
    data: { value }
  } = props;

  const descriptionItemsCount = React.useMemo(
    () => Number(formatMessage({ id: `monster.states.${value}-description-texts-count` })),
    [formatMessage, value]
  );

  const arraySequence: number[] = React.useMemo(
    () => Array.from(new Array(descriptionItemsCount), (val: number, index) => index + 1),
    [descriptionItemsCount]
  );

  const component = <components.MultiValueLabel {...props} />;

  return (
    <StatefulToolTip parent={component} position='bottom' arrow='center'>
      <ul>
        {arraySequence.map(number => (
          <li key={number}>
            {formatMessage({ id: `monster.states.${value}-description-text-${number}` })}
          </li>
        ))}
      </ul>
    </StatefulToolTip>
  );
};

export default injectIntl(MultiValueLabel);
