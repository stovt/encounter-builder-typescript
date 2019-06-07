import { MonsterCR } from 'shared/types/monsters';

type CRInfoType = Record<
  string,
  {
    string: MonsterCR;
    numeric: number;
    exp: number;
  }
>;

const CR_INFO: CRInfoType = {};
CR_INFO['0'] = { string: '0', numeric: 0, exp: 10 };
CR_INFO['1/8'] = { string: '1/8', numeric: 0.125, exp: 25 };
CR_INFO['1/4'] = { string: '1/4', numeric: 0.25, exp: 50 };
CR_INFO['1/2'] = { string: '1/2', numeric: 0.5, exp: 100 };
CR_INFO['1'] = { string: '1', numeric: 1, exp: 200 };
CR_INFO['2'] = { string: '2', numeric: 2, exp: 450 };
CR_INFO['3'] = { string: '3', numeric: 3, exp: 700 };
CR_INFO['4'] = { string: '4', numeric: 4, exp: 1100 };
CR_INFO['5'] = { string: '5', numeric: 5, exp: 1800 };
CR_INFO['6'] = { string: '6', numeric: 6, exp: 2300 };
CR_INFO['7'] = { string: '7', numeric: 7, exp: 2900 };
CR_INFO['8'] = { string: '8', numeric: 8, exp: 3900 };
CR_INFO['9'] = { string: '9', numeric: 9, exp: 5000 };
CR_INFO['10'] = { string: '10', numeric: 10, exp: 5900 };
CR_INFO['11'] = { string: '11', numeric: 11, exp: 7200 };
CR_INFO['12'] = { string: '12', numeric: 12, exp: 8400 };
CR_INFO['13'] = { string: '13', numeric: 13, exp: 10000 };
CR_INFO['14'] = { string: '14', numeric: 14, exp: 11500 };
CR_INFO['15'] = { string: '15', numeric: 15, exp: 13000 };
CR_INFO['16'] = { string: '16', numeric: 16, exp: 15000 };
CR_INFO['17'] = { string: '17', numeric: 17, exp: 18000 };
CR_INFO['18'] = { string: '18', numeric: 18, exp: 20000 };
CR_INFO['19'] = { string: '19', numeric: 19, exp: 22000 };
CR_INFO['20'] = { string: '20', numeric: 20, exp: 25000 };
CR_INFO['21'] = { string: '21', numeric: 21, exp: 33000 };
CR_INFO['22'] = { string: '22', numeric: 22, exp: 41000 };
CR_INFO['23'] = { string: '23', numeric: 23, exp: 50000 };
CR_INFO['24'] = { string: '24', numeric: 24, exp: 62000 };
CR_INFO['25'] = { string: '25', numeric: 25, exp: 75000 };
CR_INFO['26'] = { string: '26', numeric: 26, exp: 90000 };
CR_INFO['27'] = { string: '27', numeric: 27, exp: 105000 };
CR_INFO['28'] = { string: '28', numeric: 28, exp: 120000 };
CR_INFO['29'] = { string: '29', numeric: 29, exp: 135000 };
CR_INFO['30'] = { string: '30', numeric: 30, exp: 155000 };

export { CR_INFO };
