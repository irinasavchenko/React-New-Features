import React from 'react';

export default function Loader() {
  const styles = {
    div: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '0.5rem'
    }
  };
  return(
    <div style={ styles.div }><div className="lds-dual-ring"></div></div>
  )
}