import React, { Component } from 'react';
 
const CatList = (props) => {
  console.log('yeet', props.cats)
 return (
   <div>
     {props.cats.map(cats => <li>{cats}</li> )}
   </div>
 )
}
 
export default CatList;
