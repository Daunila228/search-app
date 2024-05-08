import React, { useState } from "react";
import JSONDATA from './MOCK_DATA.json'


const App = () => {

  const [searchTerm, setSearchTerm] = useState('')

  return(
    <div className="App">
      <input type="text" placeholder='   Search...' onChange={(event) => {setSearchTerm(event.target.value)}}/>
      
      {JSONDATA.filter((val) => {
        if (searchTerm == '') {
          return val
        }
        else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
        else if(val.last_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
        else if(val.gender.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
      }).map((val, key) => {
        return(
          <div className="user" key={key}>
            <table>
              <tr>
                <p>{val.first_name} {val.last_name} {`(${val.gender})`}</p>
              </tr>
            </table>
          </div>
      )})}

    </div>
  )
}

export default App;