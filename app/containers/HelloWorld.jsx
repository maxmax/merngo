import React from 'react';

/*
 * Note: This is kept as a sample container-level component
 */
const HelloWorld = () => {
  console.log("containers/HelloWorld");
  return (
    <div className="hello-world">
      <h1 className="header">Hello World</h1>
      <div className="section">
        <p>Hello World - this sample container</p>
      </div>
    </div>
  );
};

export default HelloWorld;
