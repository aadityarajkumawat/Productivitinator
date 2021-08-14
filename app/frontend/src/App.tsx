import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Home } from './pages/Home/Home'

function App() {
    return (
        <div className='d-flex'>
            <Sidebar />
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
