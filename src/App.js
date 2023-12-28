import { Provider } from 'react-redux'
import state from './redux/reducer/MTRoor'
import AppContent from './AppContent';
import Apply from "./component/Apply/Apply";

function App() {
  return (
    <Provider store={state}>
        <AppContent/>
        {/*<Apply/>*/}
    </Provider>
  );
}

export default App;
