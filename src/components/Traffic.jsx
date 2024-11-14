import React, {  useEffect, useState } from 'react'

const Traffic = () => {
    const[trafficLight,setTrafficLight]=useState({
        red:{
            next:"yellow",
            time:10
        },
        yellow:{
            next:"green",
            time:5
        },
        green:{
            next:"red",
            time:15
        }

    })
    const[isActive,setIsActive]=useState('green');
    const[timer,setTimer]=useState(trafficLight['green'].time);
    const[customTime,setCustomTime]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setIsActive((prevLight)=> trafficLight[prevLight].next);
            setTimer((prevLight)=>trafficLight[trafficLight[isActive].next].time);
        },timer*1000)
        return ()=> clearInterval(interval);
    },[isActive,timer]);
    const activateLight=(light)=>{
        setIsActive(light);
        setTimer(trafficLight[light].time);
    }
    const increaseTimer = () => {
        setTimer((prevTimer) => prevTimer + parseInt(customTime, 10));
    };
    console.log(timer);
  return (
    <div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Traffic Light Management</h1>
            <p style={{borderRadius:50,backgroundColor:isActive==='red' ? 'red' : 'rgba(255, 0, 0, 0.3)',height:50,width:50}}></p>
            <p style={{borderRadius:50,backgroundColor:isActive==='green'?'green' : 'rgba(0, 255, 0, 0.3)',height:50,width:50}}></p>
            <p style={{borderRadius:50,backgroundColor:isActive==="yellow"?'yellow' : 'rgba(255, 255, 0, 0.3)',height:50,width:50}}></p>
            <div>
            <button style={{borderRadius:'1px solid black',margin:3,backgroundColor:'black',color:'white'}}onClick={()=> activateLight('red')}>Red Light</button>
            <button style={{borderRadius:'1px solid black',margin:3,backgroundColor:'black',color:'white'}} onClick={()=>activateLight('green')}>Green Light</button>
            <button style={{borderRadius:'1px solid black',margin:3,backgroundColor:'black',color:'white'}} onClick={()=>activateLight('yellow')}>Yellow Light</button>
            </div>
            <input type='number'
                style={{margin:2,width:100}}
                value={customTime}
                onChange={(e)=>setCustomTime(e.target.value)}
                placeholder='Enter seconds'            
            />
            <button style={{borderRadius:'1px solid black',marginBottom:3,backgroundColor:'black',color:'white'}} onClick={increaseTimer}>Increase Time</button>
        </div>
    </div>
  )
}

export default Traffic