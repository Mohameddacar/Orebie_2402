import React from 'react'

const CheckoutInput = ({label,id,placeholder,typeRequire,inputClassName,labelClassName}) => {
  return (
    <>
     <label className={`font-dm font-bold text-secondary text-base text-[#262626] ${labelClassName}`} htmlFor="fname">
          {label} <br />
          <input required={typeRequire} id={id} className={`w-[507px] px-3 py-6 border-b border-[#F0F0F0] outline-0 mb-4 ${inputClassName}`} type="text" placeholder={placeholder}/> <br />
        </label>
    </>
  )
}

export default CheckoutInput