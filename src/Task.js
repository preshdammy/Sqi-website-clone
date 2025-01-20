import React, { useState } from 'react';



const Task = () => {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [userarray, setuserarray] = useState([])
  const [type, settype] = useState(false)

  const Submit = () => {
    let userobj = {
      name,
      className
    }
    setuserarray([...userarray, userobj])
    setName('')
    setClassName('')
  };
  

  const changes = () => {
    settype (!type)
  }

  
  // ternary operator{conditional expression? truth expression : false expression}
  return (
    <div>
      <br /><br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" id='input1' />
      <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} placeholder="Enter Class" id='input2'/>
      <button onClick={Submit}>Submit</button>

      <br /><br />

      <table border="1" style={{borderCollapse:"Collapse", width:"300px"}}>
            <thead>
              <tr>
               <th>Name</th>
               <th>Class</th>
              </tr>
            </thead>

            <tbody>
            {userarray.length === 0? "user is not availabe" :
              userarray.map((user) =>{
               return(
               <>
                 <tr>
                    <td>{user.name}</td>
                   <td>{user.className}</td>
                  </tr>
               </>
              )})
            }
            </tbody>
          </table>

          {/* <div>
            <input type={type ? "text" : "password"} />
            <button onClick={changes}>Change</button>
          </div> */}
    </div>
  );
};

export default Task;
