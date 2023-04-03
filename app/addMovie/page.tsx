"use client"

import router from "next/router";
import React, { useState } from "react";
const AddMovie = () => {
  // track form state
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");

  // state to show result after submitting
  const [result, setResult] = useState<any>();
  //  submit handler
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    //  encode the data to application/x-www-form-urlencoded type
    const formData = new URLSearchParams();
    formData.append("genre", genre);
    formData.append("title", title);
    formData.append("description", description);

    const url = "http://localhost:3001/api/v1/add_movie"

    //  call backend endpoint using fetch api
    fetch(url, {
      body: formData.toString(),
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    }).then(async (result) => {
      //  modify the state to show the result
      console.log(result)
      setResult(await result.json());
      router.push('/')
    });
  };

  return (
    <div className="container mx-auto max-w-sm">
      <h1 className="text-3xl my-4">Add New Movie!</h1>
      {/*  wire-up the handleSubmit handler */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-stretch"
      >
        
         <input
          placeholder="Enter your title"
          name="title"
          //  wire-up the controlled state
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-"
        />

       <input
          placeholder="Enter your genre"
          name="genre"
          //  wire-up the controlled state
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="input input-"
        />

         <input
          placeholder="Enter your description"
          name="description"
          //  wire-up the controlled state
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input input-"
        />
        <button type="submit" className="btn btn-accent">
          Add Movie
        </button>
        <div className="card shadow-xl bg-base-100">
          {/* <div className="card-body">
            <p className="card-title">Result</p>
            <pre>{JSON.stringify(result, null, 4)}</pre>
          </div> */}
        </div>
      </form>
      {/* show the data returned by the api */}
    </div>
  );
};
export default AddMovie;
// "use client"


// import { useRouter } from "next/navigation"
// import {FormEvent, useState} from "react"

// export default function SearchBox() {

//     const [name, setGenre] = useState("")
//     const [title, setTitle] = useState("")
//     const [password, setPassword] = useState("")

//     const router = useRouter();

//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//          e.preventDefault()
//          setGenre("")
//          setTitle("")
//          setPassword("")

//          const res = await fetch('http://localhost:8080/api/v1/add_user',{
//           method: "post",
//           headers: {
//             "content-type": "application/x-www-form-urlencoded",
//           },
//       })
      
//         //  if(!res.ok) throw new Error('Failed to post data')
          
//          return res.json()

//         // router.push('/');
//     }


//   return (
//     <form onSubmit={handleSubmit}>
//      <input 
//      type="text" 
//      placeholder="Title..."
//      value={name}
//      onChange={(e) => setGenre(e.target.value)}
//      />

//     <input 
//      type="text" 
//      placeholder="Genre..."
//      value={title}
//      onChange={(e) => setTitle(e.target.value)}
//      />

//      <input 
//      type="text" 
//      placeholder="Description..."
//      value={password}
//      onChange={(e) => setPassword(e.target.value)}
//      />
//      <button type="submit">Add Movie</button>
//     </form>
//   )
