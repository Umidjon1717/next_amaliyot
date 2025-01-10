import ProductWrapper from '@/component/ProductWrapper';
import { IBlog } from '@/types';
import Link from 'next/link'
import { title } from 'process';
import React from 'react'

const Products = async() => {
  const data=await fetch("https://api.vercel.app/blog")
  const posts:IBlog[]= await data.json();
  return (
    <div>
        <h2>Product</h2>
        {/* <div className='flex gap-3 flex-wrap container mx-auto'>
          {
            posts.map((post:IBlog)=>(
              <div className='border w-[300px] shadow-md' key={post.id}>
                <h3 className='font-bold'>{post.title}</h3>
                <p>{post.author}</p>
              </div>
            ))
          }
        </div> */}
        <ProductWrapper posts={posts}/>
    </div>
  )
}

export default Products