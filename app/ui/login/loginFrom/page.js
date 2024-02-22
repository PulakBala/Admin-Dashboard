
// import React from 'react'
// import styles from './loginFrom.module.css'
// import { authenticate } from '@/app/lib/action'
// export default function LoginFrom() {
//   return (
//     <div>
//         <form action={authenticate} className={styles.form}>
//       <h1>Login</h1>
//       <input type="text" placeholder="username" name="username" />
//       <input type="password" placeholder="password" name="password" />
//       <button>Login</button>
//       {/* {state && state} */}
//     </form>
//     </div>
//   )
// }


"use client";

import { authenticate } from "@/app/lib/action";
import styles from './loginFrom.module.css'
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state && state}
    </form>
  );
};

export default LoginForm;