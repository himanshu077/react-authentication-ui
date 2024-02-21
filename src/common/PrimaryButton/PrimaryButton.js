import React from 'react'

const PrimaryButton = ({buttonName, className }) => {
  return (
    <button className={`!text-[--white]  !bg-[--primary] !font-semibold !text-base  !rounded-md !capitalize ${className}`}>{buttonName}</button>
  )
}

export default PrimaryButton