import React from 'react'

function Header({title}) {
  return (
    <header>

        {/* <h1>{props.title}</h1> */}
        <h1>{title}</h1>
      
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header
