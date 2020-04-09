import { SET_ROWS, SET_COLUMNS } from 'store/types/ui';

export const setRows = rows => ({ type: SET_ROWS, payload: rows });
export const setColumns = columns => ({ type: SET_COLUMNS, payload: columns });
