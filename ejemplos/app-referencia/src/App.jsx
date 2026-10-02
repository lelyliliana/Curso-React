import {useEffect,useState} from "react";

export default function App(){
 const [estado,setEstado]=useState({status:"loading",data:[],error:null});
 useEffect(()=>{
  const controller=new AbortController();
  async function cargar(){
   try{
    const r=await fetch("https://jsonplaceholder.typicode.com/users",{signal:controller.signal});
    if(!r.ok) throw new Error(`HTTP ${r.status}`);
    const data=await r.json();
    setEstado({status:data.length?"success":"empty",data,error:null});
   }catch(error){
    if(error.name!=="AbortError")setEstado({status:"error",data:[],error});
   }
  }
  cargar();
  return ()=>controller.abort();
 },[]);
 if(estado.status==="loading")return <p role="status">Cargando…</p>;
 if(estado.status==="error")return <p role="alert">No fue posible cargar.</p>;
 if(estado.status==="empty")return <p>No hay resultados.</p>;
 return <main><h1>Usuarios</h1><ul>{estado.data.map(u=><li key={u.id}>{u.name}</li>)}</ul></main>;
}
