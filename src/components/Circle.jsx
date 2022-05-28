import React, { useEffect, useState } from 'react'
import "./circle.css"

const Circle = () => {
  const [circle,setCircle]=useState("");
  const [arr,setArr]=useState([])
  const [baloonArr,setBaloonArr]=useState([])

  const colorgenerate =()=>{
    var colors=[];
  function generateRandomColor() {
    
    
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log("color",color)
    return color
  }
  for(let j=0;j<5;j++){
    colors.push(generateRandomColor())
  }
  console.log("colors",colors)
  setArr(colors)
  }

console.log(arr)
  useEffect(()=>{
   colorgenerate()
  },[])
  
  console.log(arr)
  const handleSubmit= (e) => {
    if(circle>5 || circle<1){
      return alert("provide value 1 to 5")
    } 
    //const selecteditem=arr[circle-1]
   // console.log(selecteditem)
  //  var newarr= arr.splice(circle-1,1)
  //   console.log("arr",arr)
  setBaloonArr(arr[circle-1])
  let colorfilter=arr.filter((e)=>e!= arr[circle-1]);
  setArr(colorfilter)


    
  }
  console.log("finalarr",arr)
  
  return (
    <>
    <div className='maindiv'>
    <div className="emptydiv"></div>
    <div className='circlediv'>
    {arr.map((e,index)=>{
      return(
        <div key={index}  className='circlewithcolor' style={{"backgroundColor":e}}></div>
      )
      

    
  })
}

    
    
    
    </div>
    <div>
    
    <input type="number" placeholder='enter circle number' name="circle" value={circle} onChange={e=>setCircle(e.target.value)} />
    <button onClick={handleSubmit} > Shoot</button>
    
    </div>
    </div>
    </>
  )
}

export default Circle