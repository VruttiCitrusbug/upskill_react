import React,{useContext} from 'react'
import { Usercontext,Usercontext2 } from '../App'

// function ComponentA() {
//   return (
//     <div>
//     <Usercontext.Consumer>
//         { user => {
//                 return (
//                         <Usercontext2.Consumer>
//                         {
//                             user2 => {
//                                 return (
//                                 <div>{user},{user2}</div>
//                                 )
//                             }
//                         }
//                         </Usercontext2.Consumer>
//                 )
//             }
//         }
//     </Usercontext.Consumer>
//     </div>
//   )
// }


function ComponentA() {

    const user = useContext(Usercontext)
    const user2 = useContext(Usercontext2)
  
    // return (
    //   <div>
    //     {user[0]} - {user2}
    //   </div>
    // )

    return (
        <div>
          {user.x} - {user2}
        </div>
      )

  }


export default ComponentA