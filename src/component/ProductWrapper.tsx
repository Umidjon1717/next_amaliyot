"use client"
import { IBlog } from '@/types';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProductWrapper = ({ posts }: { posts: IBlog[] }) => {
  const router = useRouter();
  
  return (
    <div className="flex gap-3 flex-wrap container mx-auto">
      {posts.map((post: IBlog) => (
        <div
          key={post.id}
          className="border w-[300px] shadow-md cursor-pointer p-4"
          onClick={() => router.push(`/products/${post.id}`)}
        >
          <h3 className="font-bold">{post.title}</h3>
          <p>{post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductWrapper;
