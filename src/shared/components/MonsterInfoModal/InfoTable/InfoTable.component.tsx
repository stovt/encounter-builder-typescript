import * as React from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';
import ReactTable from 'react-table';

interface Props {
  data: {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  }[];
  intl: InjectedIntl;
}

const InfoTable: React.FC<Props> = ({ data, intl: { formatMessage } }) => {
  const keys = Object.keys(data[0]);

  const columns = keys.map((key: string) => ({
    Header: formatMessage({ id: `monster.${key}` }),
    accessor: key,
    Cell: ({ value }: { value: string }) => {
      const calcValue = Math.floor((Number(value) - 10) / 2);
      return `${value} (${calcValue > 0 ? '+' : ''}${calcValue})`;
    },
    style: { justifyContent: 'center' }
  }));

  return (
    <ReactTable
      data={data}
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
    />
  );
};

export default injectIntl(InfoTable);
