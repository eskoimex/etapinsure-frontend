// "use client"

// import React, { useState } from "react";
// const SearchBox = () => {
//   // track form state
//   const [email, setEmail] = useState("");
//   // state to show result after submitting
//   const [result, setResult] = useState<any>();
//   //  submit handler
//   const handleSubmit = async (
//     e: React.FormEvent<HTMLFormElement>
//   ): Promise<void> => {
//     e.preventDefault();
//     //  encode the data to application/x-www-form-urlencoded type
//     const formData = new URLSearchParams();
//     formData.append("email", email);

//     //  call backend endpoint using fetch api
//     fetch("/api/subscribe", {
//       body: formData.toString(),
//       method: "post",
//       headers: {
//         "content-type": "application/x-www-form-urlencoded",
//       },
//     }).then(async (result) => {
//       //  modify the state to show the result
//       setResult(await result.json());
//     });
//   };

//   return (
//     <div className="container mx-auto max-w-sm">
//       <h1 className="text-3xl my-4">Sign up to our newsletter!</h1>
//       {/*  wire-up the handleSubmit handler */}
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col gap-4 items-stretch"
//       >
//         <input
//           placeholder="Enter your email"
//           name="email"
//           //  wire-up the controlled state
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="input input-"
//         />
//         <button type="submit" className="btn btn-accent">
//           Sign Up
//         </button>
//         <div className="card shadow-xl bg-base-100">
//           <div className="card-body">
//             <p className="card-title">Result</p>
//             <pre>{JSON.stringify(result, null, 4)}</pre>
//           </div>
//         </div>
//       </form>
//       {/* show the data returned by the api */}
//     </div>
//   );
// };
// export default SearchBox;
"use client"


import { useRouter } from "next/navigation"
import {FormEvent, useState} from "react"

export default function SearchBox() {

    const [search, setSearch] = useState("")
    const router = useRouter();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
         e.preventDefault()
         setSearch("")

         router.push(`/search/${search}`);
    }


  return (
    <form className="max-w-6xl mx-auto flex justify-between items-center px-5"
    onSubmit={handleSearch}>
     <input 
     className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 "
     type="text" 
     placeholder="Search by title or genre..."
     value={search}
     onChange={(e) => setSearch(e.target.value)}
     />
     <button 
     className="text-orange-400 disabled:text-gray-500"
     disabled={!search} 
      type="submit"
      >Search</button>
    </form>
  )
}