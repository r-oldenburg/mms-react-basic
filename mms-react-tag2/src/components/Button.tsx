import React from 'react'

const Button = ({ children }:
    { children: React.ReactElement[] | React.ReactElement }) => {

        //props TS für React Elements und Node
    return (
        <button>
            {children}
        </button>
    )
}

export default Button
