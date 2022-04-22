import { TokenContextProvider } from './TokenContextProvider';
import BookingPage from './pages/BookingPage';
import "@tokenscript/token-negotiator/dist/theme/style.css";

const App = () => {
  return (
    <TokenContextProvider>
      <>
        <BookingPage/>
        <div className="overlay-tn"></div>
      </>
    </TokenContextProvider>
  )
}

export default App;

