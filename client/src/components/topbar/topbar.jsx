import "./topbar.css";
import logo from "../../images/favicon.ico";
import profilePhoto from "../../images/profile.jpg";

export default function TopBar() {
    /*user set*/
    const user = false;
    return (
        <div className="top">
            <div className="topSocial">
                <a
                    className="top-link active"
                    href="https://www.facebook.com/uluslararasifsm/"
                >
                    <i className="topIcon fa-brands fa-facebook-square"></i>
                </a>
                <a
                    className="top-link active"
                    href="https://www.instagram.com/ufsmmezun/"
                >
                    <i className="topIcon fa-brands fa-instagram-square"></i>
                </a>
                <a
                    className="top-link active"
                    href="https://twitter.com/ufsm_aihl"
                >
                    <i className="topIcon fa-brands fa-twitter-square"></i>
                </a>
            </div>
            <div className="topLeft">
                <a className="top-link active" href="/">
                    <img className="logo" src={logo} alt="" />
                </a>
                <div className="siteName">
                    <a className="top-link active" href="/">
                        UFSM MEZUNLAR
                    </a>
                </div>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <a className="top-link active" href="/">
                            Ana Sayfa
                        </a>
                    </li>
                    <li className="topListItem">
                        <a className="top-link active" href="/haberler">
                            Haberler
                        </a>
                    </li>
                    <li className="topListItem">
                        <a className="top-link" href="/kadro">
                            ??dari Kadro
                        </a>
                    </li>
                    <li className="topListItem">
                        <a className="top-link" href="/iletisim">
                            ??leti??im
                        </a>
                    </li>
                    <li className="topListItem">
                        <a className="top-link" href="/mezunlar">
                            {user && "Mezunlar"}
                        </a>
                    </li>
                    <li className="topListItem">
                        <a className="top-link" href="/galeri">
                            {user && "Galeri"}
                        </a>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img className="topImage" src={profilePhoto} alt="" />
                ) : (
                    <div className="topListItem">
                        <a className="top-link active" href="/login">
                            Giri?? Yap
                        </a>
                    </div>
                )}
                {user ? (
                    <div className="username">??mer Faruk G??l</div>
                ) : (
                    <div className="topListItem">
                        <a className="top-link active" href="/register">
                            Kay??t Ol
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
