import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { DateRangePicker } from 'rsuite';
function App() {
  return (
    <div className="App">
     <Header/>
     <DateRangePicker appearance='default' placeholder="Select Dates"/>
     <Home/>
     <Footer/> 
    </div>
  );
}

export default App;
