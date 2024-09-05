import React from 'react'
import { Link } from 'react-router-dom'
import { UseContextAuth } from '../ContextFolder/Context/UseContextAuth'
import { auth } from '../App';
import { signOut } from 'firebase/auth';

function Navbar({onOpen}) {
  const {user} = UseContextAuth();

  const handleLogOut = ()=>{
    signOut(auth)
    // .then(()=>{
    //     const emptyCart = [];
    //     setLocalStorageItem('cart',JSON.stringify(emptyCart))
    //     setLocalStorageItem('order',JSON.stringify(emptyCart))
    //     dispatch({type:'signUser', payload:null}); 
    //     removeOrder({type:'getOrder', payload:null});
    // })
}
  return (
  <>
  <nav className="navbar navbar-expand-lg " data-bs-theme='dark'>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/apartmentwebsite">Mag's resident</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/apartmentwebsite">Home</Link>
        </li>
        {
         !user ? 
         <>
        <li className="nav-item">
          <Link className="nav-link" to="register">register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="register">sign in</Link>
        </li>
         </>:
         <>
        <li className="nav-item">
          <Link className="nav-link" to="bookings">view bookings</Link>
        </li>
        {
          user.uid === process.env.REACT_APP_superAdmin && <li>
            <Link className='nav-link' to={'upload'}>upload</Link>
          </li>
        }
        <li className='nav-item'>
          <span onClick={handleLogOut} className='nav-link' href='#'>log out</span>
        </li>
         </> 
        }

        {/* <li>
          <span onClick={onOpen}>open</span>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
