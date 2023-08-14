import React from 'react';

const CustomButton = ({title, containerStyles, iconRight, type, onclick}) => {
  return (
    <button
        onclick={onclick}
        type={type || "button"}
        className={`inline-flex items-center ${containerStyles}`}
        >
            {title}
            {iconRight && <div className='ml-2'>{iconRight}</div>}
    </button>
  );
};

export default CustomButton