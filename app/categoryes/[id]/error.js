'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>خطایی به وجود آمده است</h2>
      <button
        onClick={
         
          () => reset()
        }
      >
        تلاش دوباره
      </button>
    </div>
  )
}