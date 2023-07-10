import React from 'react'
import './global.css'
import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import styles from '../src/Components/App.module.css'




const App = () => {
  return (
    <div>
      <Header/>

      <div className={styles.whrapper}>

      <Sidebar/>

      <main>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus delectus quia eaque ab earum quis quasi architecto voluptatum? Enim iusto delectus corporis repellat est consequuntur dicta? Iusto id quo facilis.</p>
      </main>



      </div>
      
      
      
      </div>
  )
}

export default App