import React from 'react'

function CustomButton(props) {
  return (
    <button {...props}>
        {props.children}
    </button>
  )
}

export default CustomButton