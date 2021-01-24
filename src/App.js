import './App.css';
import {FlexWrapper} from './components/FlexWrapper'
import Header from './components/Header'
import MyDocument from './components/MyDocument';
function App() {
  return (
      
      <FlexWrapper color="#284B63" direction="column" align="center" className = "App">
        <Header bgcolor = {'#284B63'}/>
        <MyDocument/>
      </FlexWrapper>
  );
}

export default App;
