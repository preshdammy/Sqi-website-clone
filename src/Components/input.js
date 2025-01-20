import React from 'react'
// import {useState} from "react"



// const input = () => {

//   const{Name, setName} = useState{`${input.value}`}


//   const click = () =>{
//     setName(`${input.value}`)
//    }
//   return (
//     <div>
//        <input type="text" name="Name" value="" id='input1' />
//         <input type="text" name="Class" value="" id='input2' />
//         <button onClick={click}> Submit </button>
//     </div>
//   )
// }

// export default input

const Input = () => {
  // Initialize state for 'name' and 'class'
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Class:', className);
  };

  return (
    <div>
      <input
        type="text"
        name="Name"
        value={name}  // Controlled input, binds state 'name'
        onChange={(e) => setName(e.target.value)} // Update state with input value
        id="input1"
        placeholder="Enter Name"
      />
      <input
        type="text"
        name="Class"
        value={className}  // Controlled input, binds state 'className'
        onChange={(e) => setClassName(e.target.value)} // Update state with input value
        id="input2"
        placeholder="Enter Class"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Input;
