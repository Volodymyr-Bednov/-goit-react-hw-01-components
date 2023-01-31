import css from './Statistics.module.css';
export const StatisticsItem = ({ data }) => {
  //console.log(data);
  const { label, percentage } = data;

  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

//const setColor = () => Math.floor(Math.random() * 16777215).toString(16);
