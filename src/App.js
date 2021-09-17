import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Nav'
import Notification from './Components/Notification'
import Tasks from './Screens/Tasks'
import Focus from './Screens/Focus'

function App() {
  return (
    <Router>
      <Notification
        text="🐛 BUG FIX: The Timer will continue to run even when browsing tasks."
        bg="#835fff"
      />
      <Header />
      <Switch>
        <Route path="/" exact component={Tasks} />
        <Route path="/pomodoro" component={Focus} />
      </Switch>
    </Router>
  )
}

export default App
