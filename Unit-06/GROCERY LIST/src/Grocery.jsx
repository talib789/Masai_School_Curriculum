import React from 'react';
import {GroceryList} from "./GroceryList.jsx";
import {GroceryInput} from "./GroceryInput.jsx";
import {v4 as uuidv4} from "uuid";

function Grocery(){
    const [data,inState] = React.useState([]) 

    const showList = (item) => {
    const itemDetails = {
 
        item:item,
        id: uuidv4()
    }; inState([...data,itemDetails])}
    const deleteItem = (itemId)=>{
          data.map((e,i)=>{
              if(e.id === itemId){
                data.splice(i,1);
                const updatedData = [...data];
                inState([...updatedData])
              }
          })
    }
    return (  
        
    <div>
     <div id="header">
       <img src="https://th.bing.com/th/id/OIP.uQYNIXTM-VLB0WL8biMhPwHaEK?pid=ImgDet&w=1024&h=576&rs=1" alt="icon" />
       <h2>Grocery List</h2>
       <img src="https://th.bing.com/th/id/OIP.uQYNIXTM-VLB0WL8biMhPwHaEK?pid=ImgDet&w=1024&h=576&rs=1" alt="icon" />
     </div>
     <div>
        <GroceryInput showList={showList}/>
        <GroceryList deleteItem={deleteItem} data={data}/>   
     </div>
    
    </div>

    )
    

}

export {Grocery}