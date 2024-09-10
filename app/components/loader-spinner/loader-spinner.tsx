import '../card-list/card-list.css';

export function LoaderSpinner() {
  return (
    <div>
      <div className="center">
        <div className="loader" data-testid="loader"></div>
      </div>
    </div>
  );
}
