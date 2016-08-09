import React, { Component } from 'react';

import Header from './header';

export default (props) => {

  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}
