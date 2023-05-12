import './App.css';
// import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/Store';
import HooksCkeContainer from './components/HooksCkeContainer';
import HooksIcecreamContainer from './components/HooksIcecreamContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HooksCkeContainer/>
      <HooksIcecreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
