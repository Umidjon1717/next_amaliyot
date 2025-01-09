import Link from 'next/link'
import React from 'react'

const Products = () => {
  return (
    <div>
        <h2>Product</h2>
        <Link href={'/product/1'}>product 1</Link>
        <Link href={'/product/2'}>product 2</Link>
        <Link href={'/product/3'}>product 3</Link>
    </div>
  )
}

export default Products