import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';

export const Statistics = props => {
  const { title, stats } = props;
  return (
    <section className={css.statistics}>
      <div className={css.statisticsCard}>
        <div className={css.wrapTitle}>
          {title && <h2 className={css.title}>{title}</h2>}
        </div>

        <ul className={css.statList}>
          {stats.map(item => (
            <StatisticsItem key={item.id} data={item} />
          ))}
        </ul>
      </div>
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
