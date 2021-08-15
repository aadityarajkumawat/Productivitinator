import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Sidebar } from './components/Sidebar/Sidebar'
import { AddSubject } from './pages/AddSubject/AddSubject'
import { College } from './pages/College/College'
import { CollegeTasks } from './pages/College/CollegeTasks'
import { Home } from './pages/Home/Home'

function App() {
    return (
        <div className='d-flex'>
            <Router>
                <Sidebar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/college' component={College} />
                    <Route exact path='/add-subject' component={AddSubject} />
                    <Route
                        exact
                        path='/college-tasks/:id'
                        component={CollegeTasks}
                    />
                </Switch>
            </Router>
        </div>
    )
}

export default App
