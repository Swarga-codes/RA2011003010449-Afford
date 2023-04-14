import logo from './logo.svg';
import './App.css';
import TrainData from './TrainData';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useEffect, useState } from 'react';
import Select from './Select'
function App() {
  var currentDate=new Date();
  const[trainData,setTrainData]=useState([]);
  const[mins,setMins]=useState('');
  const[token,setToken]=useState('');
  const RegisterUser=()=>{
    fetch('http://localhost:3000/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        companyName: "something"
    })
    }).then(res=>res.json())
    .then(data=>console.log(data))
    .then(err=>console.log(err));
  }
  const authUser=()=>{
    fetch('http://localhost:3000/auth',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      }
      ,
      body:JSON.stringify({
        clientID:"3882d16f-0e74-4dc3-8926-993b25618c85",
clientSecret:"gKXooioDJshXDnjk",
companyName:"something"
      })
    })
    .then(res=>res.json())
    .then(data=>{console.log(data);
     setToken(data.access_token); 
    })
    .catch(err=>console.log(err))
  }
  const fetchData=()=>{
    fetch('http://localhost:3000/trains',{
     method:'GET',
     headers:{
       'Content-Type':'application/json',
       'Authorization':'Bearer '+token
     }
    })
    .then(res=>res.json())
    .then(data=>{console.log(data);
   setTrainData(data);
   })
    .catch(err=>console.log(err));
    
   }
  useEffect(() => {

   RegisterUser();
   authUser();
   if(token){
    fetchData();
   }

    console.log(currentDate.getMinutes());
  }, [token])
  
  return (
    <div className="App">
    <div className="refresh">
    <RefreshIcon/>
    </div>
 <div className="selectData">
 <Select/>
 </div>
 {trainData.map(tdata=>(
 
  <TrainData data={tdata}/>

 ))

 }
    
    </div>
  );
}

export default App;
