import React from 'react'
import CallToAction from "../components/CallToAction"

export default function Projects() {
  return (
    <div className='min-h-screen max-w-3xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='text-md text-gray-500'>This is a simple project I created. Please check it out and share your thoughts with me on LinkedIn!</p>
      <CallToAction />
    </div>
  )
}
