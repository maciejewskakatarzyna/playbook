import { action, makeObservable, observable } from 'mobx';
import faker from '@withshepherd/faker';

interface Transaction {
  id: string;
  title: string;
  amount: string;
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

  // get status() {
  //   let completed = 0,
  //     remaining = 0;
  //   this.todos.forEach(todo => {
  //     if (todo.completed) {
  //       completed++;
  //     } else {
  //       remaining++;
  //     }
  //   });
  //   return { completed, remaining };
  // }
}

export const TransactionsStore = new TransactionStoreImpl();
