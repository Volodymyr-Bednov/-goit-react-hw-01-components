export const StatisticsItem = ({ data }) => {
  //console.log(data);
  const { label, percentage } = data;
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};
