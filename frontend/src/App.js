import {Routes, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import Orders from './pages/Orders';
import PageNotFound from './pages/PageNotFound';
import PastOrders from './pages/PastOrders';
import SignUp from './pages/SignUp';
import Summary from './pages/Summary';
import Pricing from './pages/Pricing';
import Career from './pages/Career';
import UserProfile from './pages/UserProfile';
import Home from './pages/Home';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/signin' element = {<SignIn/>}/>
        <Route path='/signup' element = {<SignUp/>}/>
        <Route path='/orders' element = {<Orders/>}/>
        <Route path='/summary' element = {<Summary/>}/>
        <Route path='/past-orders' element = {<PastOrders/>}/>
        <Route path='*' element = {<PageNotFound/>}/>
        <Route path='/pricing' element = {<Pricing />} />
        <Route path='/career' element = {<Career/>} />
        <Route path='/user-profile' element = {<UserProfile/>} />
      </Routes>
    </>
  );
}

export default App;
