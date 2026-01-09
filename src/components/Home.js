import React from 'react'
import Navbar from './Navbar'
import TextForm from './TextForm'

export default function Home() {
  return (
    <>
        <Navbar title="TextUtils" />
        <div className="container my-3">
            <h3>Leave your suggestion in the below Textbox</h3>
            <TextForm />
        </div>
    </>
  )
}