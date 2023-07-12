import { PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css'



export const Sidebar = ()=>{
    return(
          
        <aside className={styles.sidebar}>
                 <img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=20"/>

                 <div className={styles.profile}>
                    <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="" />

                    <strong>Hendrick Silveira</strong>
                    <span>Web Developer</span>

                 </div>
                 <footer>
                   
                    <a href="#">
                    <PencilLine className={styles.pencil}/> Editar perfil</a>
                 </footer>
                 
                 
                  
        </aside>


          
    )
}
