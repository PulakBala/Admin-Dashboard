import React from 'react'
import styles from './loginFrom.module.css'
export default function LoginFrom() {
  return (
    <div>
        <form action="" className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {/* {state && state} */}
    </form>
    </div>
  )
}
