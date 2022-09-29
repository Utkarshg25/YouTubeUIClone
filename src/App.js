import './App.css';
import Header from './Header';
import RecommendedVideo from './RecommendedVideo';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Header />
      <Switch>
      <Route path="/search/:searchTerm">
          <div className='app__page'>
             <Sidebar />
             <SearchPage />
           </div>
        </Route>

        <Route exact path="/" >
           <div className='app__page'>
             <Sidebar />
             <RecommendedVideo />
           </div>
        </Route>
      </Switch>
    </Router>
   
    </div>
  );
}

export default App;
