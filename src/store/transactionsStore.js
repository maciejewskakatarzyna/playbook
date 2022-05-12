import faker from '@withshepherd/faker';

export const createTransactionsStore = () => {
  return {
    transactions: [],
    addTransaction(data) {
      const transaction = {
        id: faker.datatype.uuid(),
        title: data.title,
        amount: data.amount,
      };

      this.transactions.push(transaction);
    },
    removeTransaction(id) {
      this.transactions = this.transactions.filter(transaction => transaction.id !== id);
    },
  };
};
