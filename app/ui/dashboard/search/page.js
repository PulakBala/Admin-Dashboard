'use client'
import React from 'react'
import styles from './search.module.css'
import { MdSearch } from 'react-icons/md'
import { usePathname,useRouter, useSearchParams } from 'next/navigation'
export default function Search({placeholder}) {

  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname()

  const handleSearch = (e) =>{
    const params = new URLSearchParams(searchParams);
    
    if(e.target.value){
      e.target.value.length > 2 && params.set("q", e.target.value);
    }else{
      params.delete("q")
    }

    replace(`${pathname}?${params}`);

  }

  return (
    <div className={styles.container}>
      <MdSearch/>
      <input onChange={handleSearch} type='text' placeholder={placeholder} className={styles.input}/>
    </div>
  )
}
