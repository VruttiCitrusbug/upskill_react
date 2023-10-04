import React from "react";
import Person from "./person";
function NameList(){
    const onlyname = []
    const names = [
        {
          "age": 23,
          "name": "Bird Ramsey",
          "gender": "male"
        },
        {
          "age": 31,
          "name": "Lillian Burgess",
          "gender": "female"
        },
        {
          "age": 34,
          "name": "Kristie Cole",
          "gender": "female"
        },
        {
          "age": 28,
          "name": "Leonor Cross",
          "gender": "female"
        },
        {
          "age": 28,
          "name": "Marsh Mccall",
          "gender": "male"
        }
      ]
    // function clickhandle(){
    //     console.log('btn')
    // }
    const PersonList = names.map(name => (
        <Person key={names.age} name={name}></Person>
    ))

    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */
            // names.map(name => <h2>I'm {name.name} and my age is {name.age}</h2>)
            PersonList
            }
            

        </div>
    )
}
export default NameList