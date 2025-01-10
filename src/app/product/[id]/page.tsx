import { IBlog } from '@/types';
import React from 'react';

const Detail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log(params);
  
  try {
    const res = await fetch(`https://api.vercel.app/products/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch the blog post.');
    }
    const post: IBlog = await res.json();
    
    return (
      <div>
        <p>{post.title}</p>
        <p>{post.author}</p>
        <p>{new Date(post.date).toLocaleDateString()}</p>
        <p>{post.content}</p>
      </div>
    );
  } catch (error) {
    return <p>Failed to load the blog post.</p>;
  }
};

export default Detail;
