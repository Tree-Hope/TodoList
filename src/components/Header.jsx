import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>오늘 할 일</h1>
      <h2>{new Date().toDateString()}</h2>
    </div>
  );
};

export default Header;