import React, { useEffect, useState } from "react";
import "./circle.css";
import { v4 as uuidv4 } from "uuid";

const Circle = () => {
  const [circleno, setCircleno] = useState("");
  const [arr, setArr] = useState([]);
  const [baloonArr, setBaloonArr] = useState([]);

  const colorgenerate = () => {
    var colors = [];
    function generateRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      //console.log("color", color);
      return color;
    }
    for (let j = 0; j < 5; j++) {
      colors = [
        ...colors,
        { id: j, value: generateRandomColor(), key: uuidv4() },
      ];
    }
   // console.log("colors", colors);
    setArr(colors);
  };

  //console.log(arr);
  useEffect(() => {
    colorgenerate();
  }, []);

  const handleSubmit = (e) => {
    if (circleno > arr.length || circleno < 1) {
      return alert(`provide value 1 to ${arr.length}`);
    }

    let colorfilter = arr.filter((e) => e != arr[circleno - 1]);
    setArr(colorfilter);

    setBaloonArr([...baloonArr, arr[circleno - 1]]);
  };

  //console.log("ballonarray", baloonArr);
  const handleClick = (key, e) => {
    let newAraay = baloonArr.filter((e) => key != e.key);
    setBaloonArr(newAraay);
    //console.log("newAraay", newAraay);
    let sortedarray = [...arr, e];
    sortedarray = sortedarray.sort((a, b) => a.id - b.id);
    setArr(sortedarray);
  };

  return (
    <>
    <div className="parentdiv">
    <div className="shooterinput">
          <input
            type="number"
            placeholder="enter circle number"
            name="circle"
            value={circleno}
            onChange={(e) => setCircleno(e.target.value)}
          />
          <button onClick={handleSubmit}> Shoot</button>
        </div>
      <div className="maindiv">
        <div className="emptydiv">




          {baloonArr.map((e, i) => {
            return (
              <div
                key={e.key}
                className="emptydivcircles"
                onClick={() => handleClick(e.key, e)}
                style={{ backgroundColor: e.value }}
              ></div>
            );
          })}
        </div>
        <div className="circlediv">
          {arr.map((e, index) => {
            return (
              <div
                key={index}
                className="circlewithcolor"
                style={{ backgroundColor: e.value }}
              ></div>
            );
          })}
        </div>
        
      </div>
      </div>
    </>
  );
};

export default Circle;
