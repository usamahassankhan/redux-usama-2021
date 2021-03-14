import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import BookContainer from './Components/BookContainer';
import store from './../src/Components/Redux/store';
function App() {
  return (
    <Provider store={store}>
    <>
    <div>dsas</div>
    <BookContainer/>
    </>
    </Provider>
  );
}

export default App;
