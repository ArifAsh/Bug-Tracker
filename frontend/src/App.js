import Login from './Views/Pages/Login/login'
import {useSelector} from 'react-redux'
import ViewBugPage from './Views/Pages/ViewBug/viewBugs'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Dashboard from './Views/Pages/Dashboard/dashboard'
import Sidebar from './Views/sidebar/sidebar'
import Topbar from './Views/topbar/topbar'
import CreateBug from './Views/Components/Bug Create/bugForm'
import ManageUsers from './Views/Pages/ManageUsers/manageUsers'


function App() {
  const{auth,bugs} = useSelector(state=> state)
  const defaultBug = {
    _id:bugs.bug.length,
    priority:1,
    type:1,
    assigned:1,
    creator: auth.userName,
  }
  const defaultUser = {
    role: "Admin"
  }
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
            <Route path="/create"><div className="page-container"><CreateBug bug={defaultBug} title="Create Bug" /></div></Route>
            <Route path="/manageUsers"><div className="page-conatiner"><ManageUsers user={defaultUser}/></div></Route>
          </Switch>
        </div>
       
      </>
    }
    </Router>
  );
}

export default App;
