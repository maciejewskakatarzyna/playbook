import React from 'react';
import { sumAmount } from '../../helpers/sumAmount';
import { PLNtoEUR } from '../../helpers/plnToEur';

const EUR = 4.382;

const sumPLN = sumAmount([1, 2, 3]);
const sumEUR = PLNtoEUR(sumPLN, EUR);

const Sum = () => {
  return (
    <div>
      <p>
        Sum: {sumPLN} PLN ({sumEUR} EUR)
      </p>
    </div>
  );
};

export default Sum;
