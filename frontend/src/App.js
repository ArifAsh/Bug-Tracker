import Login from './Views/Pages/Login/login'
import {useSelector} from 'react-redux'
import ViewBugPage from './Views/Pages/ViewBug/viewBugs'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Dashboard from './Views/Pages/Dashboard/dashboard'
import Sidebar from './Views/sidebar/sidebar'
import Topbar from './Views/topbar/topbar'
import CreateBug from './Views/Components/Bug Create/bugForm'


function App() {
  const{auth} = useSelector(state=> state)
  return (
    <Router>
    {!auth.LoggedIn ? <Login /> : 
      <>
        <Topbar/>
        <Sidebar/>
        <div className="Page">
          <Switch>
            <Route path="/" exact><Dashboard /></Route>
            <Route path="/viewbugs"><ViewBugPage /></Route>
            <Route path="/create"><div className="page-container"><CreateBug title="Create Bug" /></div></Route>
          </Switch>
        </div>
       
      </>
    }
    </Router>
  );
}

export default App;
