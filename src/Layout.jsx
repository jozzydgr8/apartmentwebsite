import React, { useRef, useState } from 'react'
import Navbar from './component/Navbar'
import { Outlet } from 'react-router-dom'
import { Modal } from 'antd'

export default function Layout() {
  const componentRef = useRef(null)
  const [open, setOpen] = useState(false)
  return (
    <>
    <Navbar onOpen={()=>{setOpen(true)}}/>
    <Outlet/>
    <div>
      <Modal open={open} componentRef={componentRef} onClose={()=>{setOpen(false)}}/>
    </div>
    </>
  )
}
