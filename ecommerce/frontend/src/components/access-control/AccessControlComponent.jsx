import React from 'react'

export const AccessControlComponent = ({Component}) => {
    let token = localStorage.getItem("_ecomm_user_token");
    console.log(token)

  return Component
}
