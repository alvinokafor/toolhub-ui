import "./Card.css";

const Card = ({
  totalTitle,
  missingTitle,
  percentTitle,
  editedTitle,
  edited,
  percentage,
  symbol,
  total,
  missing,
  tools,
  ofTools,
}) => {
  return (
    <div className="card">
      <h4 className="card-title">
        {totalTitle} {missingTitle} {percentTitle} {editedTitle}
      </h4>

      <div className="card-info">
        <h2>
          {total} {missing} {edited} {percentage}{symbol}
          <span>
            {tools}{ofTools}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Card;
