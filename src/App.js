import { Provider } from 'react-redux'
import state from './redux/reducer/MTRoor'
import AppContent from './AppContent';

function App() {
  return (
    <Provider store={state}>
        <AppContent/>
    </Provider>
  );
}

export default App;
