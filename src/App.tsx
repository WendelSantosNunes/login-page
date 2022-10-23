import { LoginImg } from './Components/LoginImg'
import { LoginInteraction } from './Components/LoginInteraction'
import './Global.module.css'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <LoginImg/>
      <LoginInteraction/>
    </div>
  )
}

export default App
