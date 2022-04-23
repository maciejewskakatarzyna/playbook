import faker from '@withshepherd/faker';
import { createStore } from 'redux';

export const addTransaction = payload => {
  return {
    type: 'transactions/add',
    payload: {
      id: faker.datatype.uuid(),
      ...payload,
    },
  };
};

export const removeTransaction = payload => {
  return {
    type: 'transactions/remove',
    payload,
  };
};

const initialState = {
  transactions: [],
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'transactions/add':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case 'transactions/remove':
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export const store = createStore(
  transactionsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
