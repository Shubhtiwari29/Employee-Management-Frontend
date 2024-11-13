import React from 'react'

const HeaderComponent = () => {
  return (
    <div style={{ marginBottom: '25px' }}>
        <header className='header'>
        <nav className='navbar navbar-dark bg-primary d-flex justify-content-center align-items-center' style={{ marginBottom: '10px' }}>
          <a className="navbar-brand" href="https://www.employeemanagement.com" style={{ fontSize: '25px' }}>
            Employee Management System
          </a>
        </nav>

        </header>
    </div>
  )
}

export default HeaderComponent
    