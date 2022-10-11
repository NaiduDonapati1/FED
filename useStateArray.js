import React,{useState} from 'react';
function UseStateArray(){
  const [arr,setArr]=useState([]);
  const [user,setUser]=useState('');
  const onClick=()=>{
    setArr(arr=>[...arr,user]);
  };
  return(
    <div>
      <h1>hello</h1>
    <input type='text' onChange={(e)=>setUser(e.target.value)} />
    <button onClick={onClick}>Add User</button>
    <table align='center'>
      <tr><th>UserName</th></tr>
      {arr.map(ele=>{
        return <tr><td>{ele}</td></tr>}
      )}
    </table>
    </div>
  )
}
export default UseStateArray;