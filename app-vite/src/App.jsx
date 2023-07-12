
import './global.css'
import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import styles from '../src/Components/App.module.css'
import { Post } from './Components/Post'




const App = () => {
  return (
    <div>
      <Header/>

      <div className={styles.whrapper}>

      <Sidebar/>

      <main>
        <Post/>
        
      </main>



      </div>
      
      
      
      </div>
  )
}

export default App