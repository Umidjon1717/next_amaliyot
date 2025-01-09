import React from 'react'

const Detail = async({params}:{params:{id:string}}) => {
    const id= (await params).id
  return (
    <div>
        <h2 className='text-red-500'>Detail {id}</h2>
    </div>
  )
}

export default Detail