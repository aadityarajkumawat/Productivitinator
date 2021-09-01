import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Sidebar } from './components/Sidebar/Sidebar'
import { AddSubject } from './pages/AddSubject/AddSubject'
import { Login } from './pages/Auth/Login'
import { College } from './pages/College/College'
import { Home } from './pages/Home/Home'

function App() {
    return (
        <div className='d-flex'>
            <Router>
                <Sidebar />
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/college' component={College} />
                    <Route exact path='/add-subject' component={AddSubject} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
