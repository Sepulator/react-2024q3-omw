import './footer.css';

export function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <a href="https://rs.school/">
        <img src="./rs_school_js.svg" alt="" className="logo" />
      </a>
      <p>{`&copy; ${date}`}</p>
      <a href="https://github.com/Sepulator/">
        <img src="./github.svg" alt="" className="logo" />
      </a>
    </footer>
  );
}
