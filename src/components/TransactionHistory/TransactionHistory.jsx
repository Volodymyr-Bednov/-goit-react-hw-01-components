import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';

export const TransactionHistory = ({ TransactionItems }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {TransactionItems.map(item => (
          <TransactionHistoryItem key={item.id} transactionItem={item} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
