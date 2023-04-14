import React from 'react'

const Child = (props) => {
  console.log(props);
  return (
    <div>
      <p>Child {props.name} , { props.course} </p>
      
    </div>
  );
};

export default Child;
