import axios from 'axios';

const baseUrl = "http://localhost:5000";

const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log('data ---->', data);
      if (Array.isArray(data)) {
        setToDo(data);
      } else if (Array.isArray(data.todos)) {
        setToDo(data.todos);
      } else {
        console.error("Unexpected API response:", data);
        setToDo([]); 
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setToDo([]); 
    });
};


const addToDo =(text,setText,setToDo)=>{
    axios
    .post(`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllToDo(setToDo);
    })
    .catch((err)=>console.log(err))
}

const updateToDo=(toDoId,text,setToDo,setText,setIsUpdating)=>{
  axios
  .post(`${baseUrl}/update`,{_id:toDoId,text})
  .then((data)=>{
    setText("")
    setIsUpdating(false)
    getAllToDo(setToDo)
  })
  .catch((err)=>console.log(err))
}

const deleteToDo=(_id,setToDo)=>{
  axios
  .post(`${baseUrl}/delete`,{_id})
  .then((data)=>{
    console.log(data);
    getAllToDo(setToDo)
  })
  .catch((err)=>console.log(err))
}
export { getAllToDo,addToDo,updateToDo,deleteToDo};
