import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Registr = () => (
  <div>
    <div>
      <input
        style={{
          width: '200px',
          height: '40px',
          border: '1px solid',
          marginTop: '200px',
          marginLeft: '200px',
          borderRadius: '15px',
        }}
        type="text"
      />
    </div>
    <div>
      <input
        style={{
          width: '200px',
          height: '40px',
          border: '1px solid',
          marginTop: '20px',
          marginLeft: '200px',
          borderRadius: '15px',
        }}
        type="text"
      />
    </div>
    <button
      type="button"
      style={{
        marginLeft: '250px',
        padding: '10px 30px 10px 30px',
        backgroundColor: 'red',
      }}
    >
      login
    </button>
  </div>
);

export default Registr;
