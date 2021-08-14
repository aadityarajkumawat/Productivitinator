import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Sidebar } from './components/Sidebar/Sidebar'
import { College } from './pages/College/College'
import { Home } from './pages/Home/Home'

function App() {
    return (
        <div className='d-flex'>
            <Sidebar />
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/college' component={College} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
