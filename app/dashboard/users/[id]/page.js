import React from 'react'
import Image from 'next/image'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
export default function SingleUser() {
  return (
    <div className={styles.container}>
    <div className={styles.infoContainer}>
      <div className={styles.imgContainer}>
        <Image src="/noavatar.png" alt="" fill />
      </div>
      Pulak Bala
    </div>
    <div className={styles.formContainer}>
      <form action="" className={styles.form}>
        <input type="hidden" name="id" />
        <label>Username</label>
        <input type="text" name="username" placeholder="username" />
        <label>Email</label>
        <input type="email" name="email" placeholder="useremail" />
        <label>Password</label>
        <input type="password" name="password" />
        <label>Phone</label>
        <input type="text" name="phone" placeholder="userphone" />
        <label>Address</label>
        <textarea type="text" name="address" placeholder="useraddress" />
        <label>Is Admin?</label>
        <select name="isAdmin" id="isAdmin">
          <option value={true} selected="admin">Yes</option>
          <option value={false} selected="">No</option>
        </select>
        <label>Is Active?</label>
        <select name="isActive" id="isActive">
          <option value={true} selected="">Yes</option>
          <option value={false} selected="">No</option>
        </select>
        <button>Update</button>
      </form>
    </div>
  </div>
  )
}
