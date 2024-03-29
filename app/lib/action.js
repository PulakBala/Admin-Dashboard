"use server"
import { Product, User } from './models';
import { connectToDB } from './utlis';
// const bcrypt = require('bcrypt');
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache'
import Products from '../dashboard/products/page';
import { signIn } from '../auth';

export const  addUser = async (formData) => {
  
    const {username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData);
    // const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPassword = await bcrypt.hash(password, salt);
    try{
        connectToDB();
        const newUser = new User({
            username, 
            email, 
            password: hashedPassword,
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
   
}


export const addProduct = async (formData) =>{
    const {title, price, stock, color, size, desc} = Object.fromEntries(formData);
   try{
    connectToDB();

   
    const newProduct = new Product({
            title,
            price,
            stock,
            color,
            size,
            desc
        });
    
        await newProduct.save();

}catch(err){
    console.log(err);
    throw new Error("Failed to create new Products");
   }
   revalidatePath("/dashboard/products");
   redirect("/dashboard/products");
}


export const deleteUser = async (formData) =>{
    const {id} = Object.fromEntries(formData);
    try{
        connectToDB();
        await User.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
        throw new Error("Failed to delete user");
    }
    revalidatePath("/dashboard/users");
}

export const deleteProduct = async (formData) =>{
    const {id} = Object.fromEntries(formData);
    try{
        connectToDB();
        await Product.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
        throw new Error("Failed to delete user");
    }
    revalidatePath("/dashboard/products");
}

export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const updateFields = {
        username,
        email,
        password,
        phone,
        address,
        isAdmin,
        isActive,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update user!");
    }
  
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  };

  export const updateProduct = async (formData) => {
    const { id, title, desc, price, stock, color, size } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const updateFields = {
        id, title, desc, price, stock, color, size
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update user!");
    }
  
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  };
  
  export const authenticate = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
      if (err.message.includes("CredentialsSignin")) {
        return "Wrong Credentials";
      }
      throw err;
    }
  };