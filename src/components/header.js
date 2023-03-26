import React from 'react'; 
import PropTypes from 'prop-types'
import Button from './Button';
//import { Component } from 'react';
const Header = ({title,onAdd,showAdd}) => {
 
  return (
    <header className='header' >
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd?'Close':'Add'}
         onClick={onAdd}
        ></Button>
        
    </header>
  )
} 
Header.defaultProps = {
title: "Task Tracker"
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}
const btnstyle={
  color:'white',
  backgroundColor:'black'
}

export default Header