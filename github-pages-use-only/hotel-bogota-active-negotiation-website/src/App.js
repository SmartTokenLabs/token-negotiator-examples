import { TokenContextProvider } from './TokenContextProvider';
import BookingPage from './BookingPage';

const App = () => {
  return (
    <TokenContextProvider tokenName={'devcon-ticket'}>
      <>
        <BookingPage/>
        <div className="overlay-tn"></div>
      </>
    </TokenContextProvider>
  )
}

export default App;

