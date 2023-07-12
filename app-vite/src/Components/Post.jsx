import styles from './Post.module.css'

export const Post = () => {
  return (
    <div>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <img  className={styles.avatar} src='https://images.unsplash.com/photo-1689126437563-f5d936a06713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'/>
                        <div className={styles.authorInfo}>
                            <strong>Loro Maxuel</strong>
                            <span>web Developer</span>
                        </div>

                    </div>
                    <time title='12 de julho de 2023' dateTime='2023-07-12'>publicado há 1h</time>
                </header>
                <div className={styles.container}>
                    <p>Faaala galera! ✌</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p>
                       👉 <a href=''>jane.design/doctorcare</a> 
                    </p>
                    <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
                </div>
            </article>



    </div>
  )
}

