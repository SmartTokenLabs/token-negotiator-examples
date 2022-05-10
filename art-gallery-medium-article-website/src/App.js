import { TokenContextProvider } from './TokenContextProvider';
import StoreFront from './StoreFront';

const App = () => {
  return (
    <TokenContextProvider>
      <>
        <StoreFront />
        <div className="overlay-tn"></div>
      </>
    </TokenContextProvider>
  )
}

export default App;