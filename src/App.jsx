import { useState, useRef } from "react";
import { AiFillFolderAdd} from "react-icons/ai";
import { BsTrash} from "react-icons/bs";
import Demon from "./components/Demon";
import Header from "./components/Header";
export default function App(){
  const [demons, setDemons] = useState([
    {
    id: 1,
    name: "Lucifer",
    age: 10
    },
    {
    id: 2,
    name: "Asmodeus",
    age: 9
    },
    {
    id: 3,
    name: "Gremory",
    age: 8
    },
  ]);
  
  const [newDemon, setNewDemon] = useState("");
  const [newDemonAdd, setNewDemonAdd] = useState("");
  const [newAge, setNewAge] = useState("");
  const [refId, setRefId] = useState("");
  const nextIdRef = useRef(4);
  return(
    <>
      <Header/>
      <div className="atas">
    {demons.map((d,i)=>(
      <div key={i}>
      <Demon
        id={d.id}
        name={d.name}
        age={d.age}
      />
      </div>
    ))}
    </div>
    
    <div className="cont">
    <div className="hapus">
    <button onClick={() => setDemons(demons.slice(1))}><BsTrash/> depan</button>
    <button onClick={() => setDemons(demons.slice(0, -1))}><BsTrash/> belakang</button>
    <button onClick={() => setDemons(demons.slice(0, 0))}><BsTrash/> Semua</button>
    </div>
    <form className="awal">
        <label>
          ID:
          <input
            type="number"
            value={nextIdRef.current}
            onChange={(e) => setNewDemonAdd(e.target.value)}
          />
          Demon Name:
          <input
            value={newDemonAdd}
            onChange={(e) => setNewDemonAdd(e.target.value)}
          />
          Demon Age:
          <input
            type="number"
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            setDemons([
              {
                id:nextIdRef.current++,
                name:newDemonAdd,
                age:parseInt(newAge),
              },
              ...demons,
            ]);
          }}
        >
          
        <AiFillFolderAdd size={20}/> Depan
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setDemons([
              ...demons,
              {
                id:nextIdRef.current++,
                name:newDemonAdd,
                age:parseInt(newAge),
              }
            ]);
          }}
        >
          
        <AiFillFolderAdd size={20}/> Belakang
        </button>
      </form>
      <form className="bawah">
        <label>
          id:
          <input
            type="number"
            value={refId}
            onChange={(e) => setRefId(parseInt(e.target.value))}
          />
          Name:
          <input
            value={newDemon}
            onChange={(e) => setNewDemon(e.target.value)}
          />
        </label>
        <button
          onClick={(e)=>{
            e.preventDefault();
            const editDemon = demons.map((demon)=> demon.id ==refId ? {...demon,name:newDemon} : demon);
            setDemons(editDemon); 
          }}
        >
          Edit
        </button>
        <button
          onClick={(e)=>{
            e.preventDefault();
            const editUmur2 = demons.filter((demon)=> demon.id !=refId);
            setDemons(editUmur2); 
          }}> 
          <BsTrash/> Hapus
        </button>
        Age:
        <button
          onClick={(e)=>{
            e.preventDefault();
            const editUmur = demons.map((demon)=> demon.id ==refId ? {...demon, age: demon.age + 1} : demon);
            setDemons(editUmur); 
          }}> 
          Plus Age
        </button>
        <button
          onClick={(e)=>{
            e.preventDefault();
            const editUmur = demons.map((demon)=> demon.id ==refId ? {...demon, age: demon.age - 1} : demon);
            setDemons(editUmur); 
          }}> 
          Min Age
        </button>
      </form>
    </div>
    </>
  )
 }
 