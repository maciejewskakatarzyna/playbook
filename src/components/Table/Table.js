import React from 'react';

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount (PLN)</th>
          <th>Amount (EUR)</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Example</td>
          <td>123</td>
          <td>10</td>
          <td>Delete</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
