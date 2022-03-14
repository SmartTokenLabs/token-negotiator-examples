import './App.css';
import List from "./pages/List";
import Details from "./pages/Details";
import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <header className="App-header">
        <div className="pageWrapper headerContainer">
            <div className="logoContainer">
                <Link to="/">
                    <img src="images/logos-token-script.png" className="App-logo" alt="TokenScript logo" />
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
                    <a href="mailto:sayhi@smarttokenlabs">
                        <img src="images/icons-email.svg" alt="Email icon" />
                    </a>
                    <h3>sayhi@smarttokenlabs</h3>
                </div>
                <div className="footerItem">
                    <div>
                        <a href="https://twitter.com/TokenScript" target="_blank" rel="noreferrer">
                            <img src="images/icons-twitter.svg" alt="Twitter icon" />
                        </a>
                        <a href="https://github.com/TokenScript" target="_blank" rel="noreferrer">
                            <img src="images/icons-github.svg" alt="Github icon" />
                        </a>
                        <a href="https://linkedin.com/company/smart-token-labs" target="_blank" rel="noreferrer">
                            <img src="images/icons-linkedin.svg" alt="LinkedIn icon" />
                        </a>
                    </div>
                    <h3>Follow TokenScript on</h3>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
