import './App.css';
import List from "./pages/List";
import Details from "./pages/Details";
import {Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <header className="App-header">
        <div className="pageWrapper headerContainer">
            <div className="logoContainer">
                <Link to="/">
                    <img src="/images/logos-token-script.png" className="App-logo" alt="TokenScript logo" />
                </Link>
            </div>
            <div className="menuContainer">
                <a href="https://tokenscript.org" target="_blank" rel="noreferrer">
                    <button className="button">Visit TokenScript Website</button>
                </a>
            </div>
        </div>
        </header>
        <Routes>
            <Route index path="/" element={ <List/> } />
            <Route path={"/details/:id"} element={ <Details/> } />
        </Routes>
        <footer className="App-footer">
            <div className="pageWrapper footerContainer">
                <div className="footerItem">
                    <a href="mailto:contact@tokenscript.org">
                        <img src="/images/icons-email.png" alt="Email icon" />
                    </a>
                    <h3>contact@tokenscript.org</h3>
                </div>
                <div className="footerItem">
                    <div>
                        <a href="https://twitter.com/TokenScript" target="_blank" rel="noreferrer">
                            <img src="/images/icons-twitter.png" alt="Twitter icon" />
                        </a>
                        <a href="https://github.com/TokenScript" target="_blank" rel="noreferrer">
                            <img src="/images/icons-github.png" alt="Github icon" />
                        </a>
                        <a href="https://linkedin.com/company/smart-token-labs" target="_blank" rel="noreferrer">
                            <img src="/images/icons-linkedin.png" alt="LinkedIn icon" />
                        </a>
                    </div>
                    <h3>Follow TokenScript on</h3>
                </div>
                <div className="footerItem">
                    <div>
                        <a href="tel:+48 662 192 244">
                            <img src="/images/icons-phone.png" alt="Phone icon" />
                        </a>
                    </div>
                    <h3>(Australia) +48 662 192 244</h3>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
