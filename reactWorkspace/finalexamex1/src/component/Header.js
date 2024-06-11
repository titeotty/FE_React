import "./Header.css"

const Header = () => {
    let NowDate = new Date().toDateString();
    return (
    <div className="Header">
        <h3>오늘은 📅</h3>
        <h1>{NowDate}</h1>
    </div>
    );
};
export default Header;