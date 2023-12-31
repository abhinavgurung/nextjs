"use client";
import Link from "next/Link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";

export default function SignupPage(){
    const [user, setuser] = React.useState({
        email: "",
        password: "",
        username:"",
    });

    const onSignup = async () =>{

    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Sign UP</h1>
            <hr/>
            
            <label htmlFor="username">username</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="username"
                type="text"
                value={user.username}
                onChange={(e)=>setuser({...user, username:e.target.value})}
                placeholder="username"
                />

            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e)=>setuser({...user, email:e.target.value})}
                placeholder="email"
                />
            <label htmlFor="password">password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e)=>setuser({...user, password:e.target.value})}
                placeholder="password"
                />
                <button onClick={onSignup} 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black">Signup here</button>
                <Link href="/login">Visit login page</Link>
        </div>
    )
}