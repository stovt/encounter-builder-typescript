import * as React from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';
import ReactTable from 'react-table';
import { PartyLevels } from 'shared/types/encounterBuilder';
import { MonsterBase, MonstersBase } from 'shared/types/monsters';
import { CR_INFO } from 'shared/constants';
import { useShowModalDispatch } from 'shared/components/Modal/Modal.actions';
import { MONSTER_INFO_MODAL_ID } from 'shared/components/MonsterInfoModal/MonsterInfoModal.constants';
import { useSetFilteredMonsterIDsDispatch } from 'pages/EncounterBuilder/EncounterBuilder.actions';
import AddMonsterButton from './AddMonsterButton';
import CRFilter from './CRFilter';
import SizeFilter from './SizeFilter';
import TypeFilter from './TypeFilter';
import { getDangerZoneClass } from './MonstersTable.helpers';
import { DEFAULT_PAGE_SIZE, PAGE_SIZE_OPTIONS } from './MonstersTable.constants';

interface Props {
  monsters: MonstersBase;
  partyLevels: PartyLevels;
  intl: InjectedIntl;
}
interface Filter {
  id: string;
  value: any;
  pivotId?: string;
}

const MonstersTable: React.FC<Props> = ({ monsters, partyLevels, intl: { formatMessage } }) => {
  const monstersTableRef = React.useRef<any>(null);

  const showModal = useShowModalDispatch();
  const setFilteredMonsterIDs = useSetFilteredMonsterIDsDispatch();

  const defaultFilterMethod = React.useCallback((filter: Filter, row: any) => {
    const id = filter.pivotId || filter.id;
    if (row[id] !== undefined) {
      return String(row[id].toLowerCase()).includes(filter.value.toLowerCase());
    }
    return true;
  }, []);

  const CRFilterMethod = React.useCallback((filter: Filter, row: any) => {
    const rowNumValue = CR_INFO[row[filter.id]].numeric;
    const {
      value: { minCR, maxCR }
    } = filter;

    if (!minCR && !maxCR) return true;
    if (minCR && maxCR && +maxCR >= +minCR) {
      return rowNumValue >= +minCR && rowNumValue <= +maxCR;
    }
    if (minCR && !maxCR) {
      return rowNumValue >= +minCR;
    }
    if (!minCR && maxCR) {
      return rowNumValue <= +maxCR;
    }
    return true;
  }, []);

  const typeRenderer = React.useCallback(
    ({ value }: { value: string }) => {
      const translatedType: string = formatMessage({ id: `monster.types.${value}` });
      const type: string = translatedType.charAt(0).toUpperCase() + translatedType.slice(1);
      return <span>{type}</span>;
    },
    [formatMessage]
  );

  const typeFilterMethod = React.useCallback((filter: Filter, row: any) => {
    const id = filter.pivotId || filter.id;
    return row[id] !== undefined ? String(row[id]).startsWith(filter.value) : true;
  }, []);

  const handleTdProps = React.useCallback(
    (state: any, rowInfo: any, column: any): {} => ({
      onClick: (e: any, handleOriginal: any) => {
        if (column.id !== 'id') {
          showModal(MONSTER_INFO_MODAL_ID, { monsterID: rowInfo.original.id });
        }
        if (handleOriginal) handleOriginal();
      }
    }),
    [showModal]
  );

  const handleOnFilteredChange = React.useCallback(() => {
    const filteredMonsterIDs = monstersTableRef.current
      .getResolvedState()
      .sortedData.map((data: MonsterBase) => data.id);

    setFilteredMonsterIDs(filteredMonsterIDs);
  }, [setFilteredMonsterIDs]);

  const columns = React.useMemo(
    () => [
      {
        Header: '',
        accessor: 'id',
        width: 50,
        Cell: ({ value }: { value: string }) => <AddMonsterButton monsterID={value} />,
        sortable: false,
        filterable: false,
        style: { justifyContent: 'center' }
      },
      {
        Header: formatMessage({ id: 'monster.name' }),
        accessor: 'name'
      },
      {
        Header: formatMessage({ id: 'monster.cr' }),
        accessor: 'challenge_rating',
        getProps: (state: any, rowInfo: any): any => {
          if (!rowInfo) return {};
          return {
            className: getDangerZoneClass(
              partyLevels,
              CR_INFO[rowInfo.original.challenge_rating].exp
            )
          };
        },
        width: 190,
        style: { justifyContent: 'center' },
        filterMethod: CRFilterMethod,
        Filter: ({ onChange }: { onChange: (value: any) => void }) => (
          <CRFilter onChange={onChange} />
        )
      },
      {
        Header: formatMessage({ id: 'monster.size' }),
        accessor: 'size',
        width: 140,
        Cell: ({ value }: { value: string }) => formatMessage({ id: `monster.sizes.${value}` }),
        Filter: ({ filter, onChange }: { filter: Filter; onChange: (value: string) => void }) => (
          <SizeFilter onChange={onChange} value={filter ? filter.value : ''} />
        )
      },
      {
        Header: formatMessage({ id: 'monster.type' }),
        accessor: 'type',
        minWidth: 130,
        Cell: typeRenderer,
        Filter: ({ filter, onChange }: { filter: Filter; onChange: (value: string) => void }) => (
          <TypeFilter onChange={onChange} value={filter ? filter.value : ''} />
        ),
        filterMethod: typeFilterMethod
      }
    ],
    [CRFilterMethod, formatMessage, partyLevels, typeFilterMethod, typeRenderer]
  );

  return (
    <ReactTable
      ref={monstersTableRef}
      data={monsters}
      columns={columns as any}
      pageSizeOptions={PAGE_SIZE_OPTIONS}
      defaultPageSize={DEFAULT_PAGE_SIZE}
      resizable={false}
      filterable
      previousText={formatMessage({ id: 'table-labels.previousText' })}
      nextText={formatMessage({ id: 'table-labels.nextText' })}
      loadingText={formatMessage({ id: 'table-labels.loadingText' })}
      noDataText={formatMessage({ id: 'table-labels.noDataText' })}
      pageText={formatMessage({ id: 'table-labels.pageText' })}
      ofText={formatMessage({ id: 'table-labels.ofText' })}
      rowsText={formatMessage({ id: 'table-labels.rowsText' })}
      defaultFilterMethod={defaultFilterMethod}
      getTdProps={handleTdProps}
      className='-highlight'
      onFilteredChange={handleOnFilteredChange}
    />
  );
};

export default injectIntl(MonstersTable);
