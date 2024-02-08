import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/page";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
export default function UsersPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for user" />
        <Link href="/dashboard/users/addUser">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
         
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src= "/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                 Pulak Bala
                </div>
              </td>
              
              <td>pulak@gmail.com</td>
              <td>08-13-24</td>
              <td>Admin</td>
              <td>active</td>
              <td  className={styles.buttons}>
                <Link href='/dashboard/users/test'>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>  
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </td>  
            </tr>
     
        </tbody>
      </table>
      <Pagination/>
    </div>
  );
}
