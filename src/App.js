import './App.css';
import Body from './components/Body'; 
import store from './utils/AppStore';
import { Provider } from 'react-redux';
function App() {
  return (
    <div>
      <Provider store={store}><Body /></Provider>
    </div>
  
  );
}

export default App;
   