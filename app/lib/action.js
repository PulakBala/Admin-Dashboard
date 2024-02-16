"use server"
import React from 'react'
import { User, Product } from './models';
import { connectToDB } from './utlis';
const bcrypt = require('bcrypt');
import { redirect } from 'next/navigation';
import { revalidatePath } from "next/cache";



export  async function addUser(formData) {
   
    const {username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData);
    const hashedPassword = await bcrypt.hash(password, 10);
    try{
        connectToDB();
        const newUser = new User({
            username, 
            email, 
            password:hashedPassword, 
            phone, 
            address, 
            isAdmin, 
            isActive
        });
        await newUser.save();
    }catch(err){
        console.log(err)
        throw new Error("Failed to create user!")
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users")
    return (
    <div>
      
    </div>
  )
}

export  async function addProducts(formData) {
  
    const {title, price, desc, stock, color,size,  isAdmin, isActive} = Object.fromEntries(formData);
   
    try{
        connectToDB();
        const newProduct = new Product({
            title, price, desc, stock, color,size,  isAdmin, isActive
        });
        await newProduct.save();
    }catch(err){
        console.log(err)
        throw new Error("Failed to create product!")
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
    return (
    <div>
      
    </div>
  )
}
