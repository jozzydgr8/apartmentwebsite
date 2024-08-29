import React from 'react'

function Navbar({onOpen}) {
  return (
  <>
  <nav className="navbar navbar-expand-lg " data-bs-theme='dark'>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Mag's resident</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">sign in</a>
        </li>
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
