import React from 'react'

const LiCurrentPagesPaginationFooter = ({ className, numberPage, onClick }) => {
  return (
    <li>
      <button className={className} onClick={onClick} >{numberPage}</button>
    </li>
  )
}

export { LiCurrentPagesPaginationFooter }