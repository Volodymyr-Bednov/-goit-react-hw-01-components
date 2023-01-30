import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';

export const Statistics = props => {
  const { title, stats } = props;
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(item => (
          <StatisticsItem key={item.id} data={item} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  props: PropTypes.exact({
    title: PropTypes.string,
    stats: PropTypes.exact({
      percentage: PropTypes.number,
      label: PropTypes.bool,
      id: PropTypes.string,
    }),
  }),
};
