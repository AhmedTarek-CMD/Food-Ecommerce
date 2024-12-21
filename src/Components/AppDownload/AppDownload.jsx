import { assets } from "../../assets/assets";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For better experience download <br />
        Tomato
      </p>
      <div className="app-download-platform">
        <img src={assets.app_store} alt="AppStore Icon" />
        <img src={assets.play_store} alt="PlayStore Icon" />
      </div>
      <div></div>
    </div>
  );
};

export default AppDownload;
