import "./Header.scss";
import splineLogo from "../assets/spline.png";

const Header = () => {
  return (
    <header>
      <div className="field">
        <img src={splineLogo} alt="" />
      </div>

      <span>infinity ~ studios</span>

      <div className="field tools">
        <button>
          <span>Download ~&gt;</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
