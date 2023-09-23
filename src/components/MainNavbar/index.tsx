import "./index.css";
import { InstagramIcon } from "../../assets/svg";

const MainNavbar = () => {
  /*   const [liliaDescription, setLiliaDescription] = useState(
    "Marketing Specialist"
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      const occupationPosition = occupations.indexOf(liliaDescription);
      if (occupations.length - 1 === occupationPosition) {
        setLiliaDescription(occupations[0]);
      } else {
        setLiliaDescription(occupations[occupationPosition + 1]);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [liliaDescription]); */

  const onClickNavigation = (sectionSelected: string) => {
    console.log(sectionSelected);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className="navbar-envelop"
    >
      <div className="container navbar-box">
        <div className="navbar-box-owner">
          <label className="navbar-subtitle">LILIAN CORDOVA</label>
        </div>
        <div className="navbar-box-navigation">
          <ul className="navbar-box-content">
            <li>
              <button
                className="navbar-buttons"
                onClick={() => onClickNavigation("about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="navbar-buttons"
                onClick={() => onClickNavigation("premios")}
              >
                Premios
              </button>
            </li>
            <li>
              <button
                className="navbar-buttons"
                onClick={() => onClickNavigation("work")}
              >
                Work
              </button>
            </li>
            <li>
              <button
                className="navbar-buttons"
                onClick={() => onClickNavigation("Art")}
              >
                Art
              </button>
            </li>
            <li>
              <button
                className="navbar-buttons"
                onClick={() => onClickNavigation("Proyectos")}
              >
                Proyectos
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-box-social">
          <InstagramIcon height="40" width="40" />
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
