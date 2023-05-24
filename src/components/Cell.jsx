import React from 'react'

const Cell = (props) => {
    const {display, className, onclick } = props
    var cn = className + "h-10" 
  
  return (
    <button className={ className + " h-10 flex justify-center items-center " } onClick={onclick}>
        {display}
    </button>
  )

}
Cell.defaultProp = {
    display : "",
    className : "",
    onclick: "",
}


export default Cell;