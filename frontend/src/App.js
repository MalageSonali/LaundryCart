import {Routes, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import Orders from './pages/Orders';
import PageNotFound from './pages/PageNotFound';
import PastOrders from './pages/PastOrders';
import SignUp from './pages/SignUp';
import Pricing from './pages/Pricing';
import Career from './pages/Career';
import UserProfile from './pages/UserProfile';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import ProtectedRoute from './components/Routes/ProtectedRoute';

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element = {<ProtectedRoute/>}>
          <Route path='' element = {<Home/>}/>
        </Route>

        <Route path='/orders' element = {<ProtectedRoute/>}>
          <Route path='' element = {<Orders/>}/>
        </Route>

        <Route path='/past-orders' element = {<ProtectedRoute/>}>
          <Route path='' element = {<PastOrders/>}/>
        </Route>

        <Route path='/user-profile' element = {<ProtectedRoute/>}>
          <Route path='' element = {<UserProfile/>} />
        </Route>
        
        <Route path='/signin' element = {<SignIn/>}/>
        <Route path='/signup' element = {<SignUp/>}/>
        <Route path='/pricing' element = {<Pricing />} />
        <Route path='/career' element = {<Career/>} />
        <Route path='/blogs' element = {<Blogs/>}/>
        <Route path='*' element = {<PageNotFound/>}/>

      </Routes>
    </>
  );
}

export default App;
