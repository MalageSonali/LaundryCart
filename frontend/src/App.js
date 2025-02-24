import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Main/>
      {/* <Activitybar/> */}
    </div>
  );
}

export default App;
