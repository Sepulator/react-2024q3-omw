import './basket.css';

export function Basket() {
  return (
    <div className="basket-block">
      <p className="card-title">Items</p>
      <button className="btn btn-round">Unselect all</button>
      <button className="btn btn-round">Download</button>
    </div>
  );
}
