import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../css/Nav.scss";
import { getUserID } from "../firebase.js";

export let Nav = ({ handleAuth, signOut }) => {
  Nav.propTypes = {
    handleAuth: PropTypes.func,
    signOut: PropTypes.func,
  };

  return <>
    <div className="nav">
      <div className="left">
        {/* change later */}
        <div className="nav-item"><a href="/">Home</a></div>
        {getUserID()
          ? <>
            <div className="nav-item"><a href="/ml">Analytics</a></div>
            <div className="nav-item"><a href="/warehouse">Warehouse</a></div>
          </> : <></>}
      </div>
      <div className="right">
        {localStorage.getItem("isAuth") == "true"
          ? <button className="nav-item logout-with-google-btn" onClick={signOut}>
            Sign Out
          </button>
          : <button className="nav-item login-with-google-btn" onClick={handleAuth}>
            Sign in with Google
          </button>}
      </div>
    </div>
  </>;
}