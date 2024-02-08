import React from 'react'
import styles from '@/app/ui/dashboard/products/addProducts/addProducts.module.css'
export default function AddUser() {
  return (
    <div className={styles.container}>
    <form  className={styles.form}>
      <input type="text" placeholder="username" name="username" required />
      <input type="text" placeholder="email" name="email" required />
      <input type="number" placeholder="password" name="password" required />
      <input type="number" placeholder="phone" name="phone" required />
      <input type="text" placeholder="color" name="color" />
      <input type="text" placeholder="size" name="size" />
      <select name="isAdmin" id="isAdmin">
          <option value={false}>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      <textarea
        required
        name="address"
        id="desc"
        rows="16"
        placeholder="address"
      ></textarea>
      <button type="submit">Finish</button>
    </form>
  </div>
  )
}
