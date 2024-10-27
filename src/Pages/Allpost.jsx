import React from 'react'
import { useSelector } from 'react-redux'

export default function Allpost() {

  const { posts } = useSelector((state) => state.postSlice)
  console.log(posts);

  return (
    <div>
      {posts.map((val, i) => {
        return <div key={i}>
          <h1>{val.title}</h1>

        </div>
      })}



    </div>
  )
}
