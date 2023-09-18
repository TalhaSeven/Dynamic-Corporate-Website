import React from 'react'
import { useLocation } from 'react-router-dom';

const Content = () => {
    const location = useLocation();
  return (
    <div>
        <div>Path :{location.pathname}</div>
    </div>
  )
}

export default Content