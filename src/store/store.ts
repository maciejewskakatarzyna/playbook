import { action, makeObservable, observable } from 'mobx';
import faker from '@withshepherd/faker';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
}

export class TransactionStoreImpl {
  transactions: Transaction[] = [];

  constructor() {
    makeObservable(this, {
      transactions: observable,
      addTransaction: action,
      removeTransaction: action,
    });
  }

  addTransaction(data: Transaction) {
    const transaction: Transaction = {
      id: faker.datatype.uuid(),
      title: data.title,
      amount: data.amount,
    };
    this.transactions.push(transaction);
  }

  removeTransaction(id: string) {
    this.transactions = this.transactions.filter(transaction => transaction.id !== id);
  }
}

export const TransactionsStore = new TransactionStoreImpl();
