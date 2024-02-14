import React from 'react'
import { User } from './models';
import { connectToDB } from './utlis';
const bcrypt = require('bcrypt');
import { redirect, revalidatePath } from 'next/navigation';

export default async function addUser(formData) {
    "use server"
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
