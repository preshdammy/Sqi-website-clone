import {useState} from "react"

const Comp = () =>{
  const [username, setusername] = useState("Tolani")
  // let username = 'tolani'

  let userobj = {
    name:"Bola", class:"React"
  }
  let userarray = [
    {name:"Tobi", class:"Laravel"},
    {name:"Muddy", class:"Javascript"},
    {name:"Lizzy", class:"React"},
    {name:"Promise", class:"Angular"},
    {name:"Timi", class:"Php"},
  ]

  const click = () =>{
   setusername("Blessing")
  }
  
  return(
   
    <div>
       <p>{username}</p>
       <p>Name: {userobj.name} Class: {userobj.class}</p>
       <p>{userarray[0].name} {userarray[0].class}</p>
       <button onClick={click}>Click</button>
       {/* {
        userarray.map((user) =>(
          <>
          <h1>{user.name}</h1>
          <h1>{user.class}</h1>
          </>
        ))
       }

       OR */}

         <table border="1" style={{borderCollapse:"Collapse", width:"300px"}}>
            <thead>
              <tr>
               <th>Name</th>
               <th>Class</th>
              </tr>
            </thead>

            <tbody>
            {
              userarray.map((user) =>{
               return(
               <>
                 <tr>
                    <td>{user.name}</td>
                   <td>{user.class}</td>
                  </tr>
               </>
              )})
            }
            </tbody>
          </table>

    </div>
   
  )
 
}

export default Comp