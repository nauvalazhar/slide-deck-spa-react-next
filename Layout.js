import React from 'react'

export default ({ children }) => (
  <>
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
      }}>
      <div style={{
        width: '60%',
        padding: '40px 0',
        margin: '0 auto'
      }}>
        {children}
      </div>
    </div>
  </>
)
