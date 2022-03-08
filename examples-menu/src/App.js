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
                    <img src="logos-token-script.png" className="App-logo" alt="logo" />
                </Link>
            </div>
            <div className="menuContainer">
                <button>Visit TokenScript Website</button>
            </div>
        </div>
      </header>
      <div>
        <Link to="/">List</Link>
        <Link to="details">Details</Link>
      </div>
        <div className="pageWrapper">
            <Routes>
                <Route index path="/" element={ <List/> } />
                <Route path={"/details/:id"} element={ <Details/> } />
            </Routes>
        </div>
        <footer className="App-footer">
            <div className="pageWrapper footerContainer">
                <div className="footerItem">
                    Footer column 1
                </div>
                <div className="footerItem">
                    Footer column 2
                </div>
                <div className="footerItem">
                    Footer column 3
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
