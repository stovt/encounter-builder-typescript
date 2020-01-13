import * as React from 'react';
import { useIntl } from 'react-intl';
import ReactTable from 'react-table';
import { MonsterActions, BattleMonsterRows, MonsterSpeed } from 'shared/types/monsters';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import { MONSTER_INFO_MODAL_ID } from 'shared/components/MonsterInfoModal/MonsterInfoModal.constants';
import { useShowModalDispatch } from 'shared/components/Modal/Modal.actions';
import { useTurnSelector } from '../EncounterBattle.selectors';
import HPInput from './HPInput';
import StateMultiSelect from './StateMultiSelect';

interface Props {
  monsters: BattleMonsterRows;
}

const BattleTable: React.FC<Props> = ({ monsters }) => {
  const showModal = useShowModalDispatch();

  const turn = useTurnSelector();

  const { formatMessage } = useIntl();

  const breakpoints = useBreakpoints();
  console.log('TCL: breakpoints', breakpoints);

  const handleTrProps = React.useCallback(
    (state: any, { index }: any) => ({
      style: {
        cursor: 'auto',
        background: turn === index ? '#e4e4e4' : 'inherit'
      }
    }),
    [turn]
  );

  const handleTdProps = React.useCallback(
    (state: any, rowInfo: any, column: any) => ({
      onClick: (e: any, handleOriginal: any) => {
        if (column.id === 'monster.name') {
          showModal(MONSTER_INFO_MODAL_ID, { monsterID: rowInfo.original.monster.id });
        }
        if (handleOriginal) handleOriginal();
      }
    }),
    [showModal]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: formatMessage({ id: 'monster.name' }),
        accessor: 'monster.name',
        width: 150,
        style: {
          cursor: 'pointer'
        }
      },
      {
        Header: formatMessage({ id: 'monster.hit-points' }),
        accessor: 'monster.hitPoints',
        Cell: ({ original: { rowID }, value }: { original: any; value: string | number }) => (
          <HPInput rowID={rowID} value={value} />
        ),
        width: 100,
        style: { justifyContent: 'center' }
      },
      {
        Header: breakpoints.lg
          ? formatMessage({ id: 'monster.armor' })
          : `${formatMessage({ id: 'monster.armor' }).slice(0, 4)}...`,
        accessor: 'monster',
        Cell: ({ value }: { value: any }) => {
          if (breakpoints.lg) {
            if (value.armorDesc) {
              return `${value.armorDesc} (${value.armorClass})`;
            }
            return value.armorClass;
          }
          return value.armorClass;
        },
        style: { justifyContent: 'center' },
        width: breakpoints.lg ? 130 : 70
      },
      {
        Header: breakpoints.lg
          ? formatMessage({ id: 'monster.initiative' })
          : `${formatMessage({ id: 'monster.initiative' }).slice(0, 4)}...`,
        accessor: 'monster.initiative',
        style: { justifyContent: 'center' },
        width: breakpoints.lg ? 100 : 70
      },
      {
        Header: formatMessage({ id: 'monster.speed.title' }),
        accessor: 'monster.speed',
        Cell: ({ value }: { value: MonsterSpeed }) => {
          const { walk, burrow, fly, swim, climb } = value;
          const speed = `\
${walk ? `${formatMessage({ id: 'monster.speed.walk' }, { speed: walk })}, ` : ''}\
${burrow ? `${formatMessage({ id: 'monster.speed.burrow' }, { speed: burrow })}, ` : ''}\
${fly ? `${formatMessage({ id: 'monster.speed.fly' }, { speed: fly })}, ` : ''}\
${swim ? `${formatMessage({ id: 'monster.speed.swim' }, { speed: swim })}, ` : ''}\
${climb ? `${formatMessage({ id: 'monster.speed.climb' }, { speed: climb })}, ` : ''}\
`.slice(0, -2);

          return speed;
        },
        width: 120
      },
      {
        Header: formatMessage({ id: 'monster.state' }),
        accessor: 'monster.state',
        Cell: ({ original: { rowID }, value }: any) => (
          <StateMultiSelect rowID={rowID} value={value} />
        ),
        width: 240
      },
      ...(breakpoints.md
        ? [
            {
              Header: formatMessage({ id: 'monster.actions' }),
              accessor: 'monster.actions',
              Cell: ({ value }: { value: MonsterActions }) =>
                value.map(action => (
                  <span key={action.name}>
                    <b>{action.name}.</b> {action.desc}
                  </span>
                )),
              style: { flexDirection: 'column', alignItems: 'normal' }
            }
          ]
        : [])
    ],
    [breakpoints.lg, breakpoints.md, formatMessage]
  );

  const tableData = React.useMemo(
    () =>
      monsters.map(row => ({
        rowID: row.rowID,
        monster: {
          id: row.monster.id,
          name: row.monster.name,
          hitPoints: row.monster.hitPoints,
          armorClass: row.monster.armorClass,
          armorDesc: row.monster.armorDesc,
          initiative: row.monster.initiative,
          speed: row.monster.speed,
          state: row.monster.state,
          actions: row.monster.actions
        }
      })),
    [monsters]
  );

  return (
    <ReactTable
      data={tableData}
      columns={columns}
      showPagination={false}
      resizable={false}
      sortable={false}
      minRows={1}
      previousText={formatMessage({ id: 'table-labels.previousText' })}
      nextText={formatMessage({ id: 'table-labels.nextText' })}
      loadingText={formatMessage({ id: 'table-labels.loadingText' })}
      noDataText={formatMessage({ id: 'table-labels.noDataText' })}
      pageText={formatMessage({ id: 'table-labels.pageText' })}
      ofText={formatMessage({ id: 'table-labels.ofText' })}
      rowsText={formatMessage({ id: 'table-labels.rowsText' })}
      getTrProps={handleTrProps}
      getTdProps={handleTdProps}
    />
  );
};

export default BattleTable;
