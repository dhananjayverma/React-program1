import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import PostItem from './PostItem';
const getData=(page)=>{
    return fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    ).then((res)=>{
        return res.json();
    });
};

export default function Posts() {
  const [Post,setPosts]=useState([]);
  const[loading,setLoading]=useState(false);


  const [page,setPage]=useState(1);
  const[count,setCount]=useState(0);

  useEffect(()=>{
     fetchAndupdateData(page)
  },[page])

  const fetchAndupdateData=async(page)=>{
    try{
        setLoading(true);
   let data=await getData(page);
    setLoading(false);
        setPosts(data);
    }catch(error){
        console.log(error);
        setLoading(false);
    }
}
const handlePageChange=(changeBy)=>{
    setPage(page+changeBy);
}
if(loading){
    return <h1>loading....</h1>
}
return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>INC</button>
      <h1>Posts</h1>
    <div>
        {Post.map((post)=>(
             <PostItem key={post.id} 
            {...post}/> 
 ))}
 <button disabled={page===1} 
 onClick={()=>handlePageChange(-1)}>
 prev</button>
 <button>{page}</button>
 <button onClick={()=>handlePageChange(1)}>NEXT</button>



    </div>
    
    </div>
  )
}








// {Post.map((post)=>( 
//     <PostItem key={post.id} 
//    title={post.title} 
//    body={post.body}/> 
// ))} 