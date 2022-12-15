
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore"


function SingleBoard(){
   
     
    const [newTaskInput, setNewTaskInput] = useState({});
    const [taskList, setTaskList] = useState([]);
  
    useEffect(() => {
      const unsub = onSnapshot(collection(db, "tasksList"), (snapshot) => {
        snapshot.docChanges().forEach((docChange) => {
          console.log(docChange)
          if (docChange.type === "added") {
            setTaskList((prevTaskList) => [
              ...prevTaskList,
              docChange.doc.data(),
            ]);
          } else if (docChange.type === "removed") {
            setTaskList(
                taskList.filter((task) => task.id !== docChange.doc.id)
            );
          }
        });
      });
      return () => unsub();
    }, []);


    const handleOnChange = (event) => {
      const keyName = event.target.name;
      const value = event.target.value;
      setNewTaskInput((prev) => {
        // Copy the previous object (state) and only change the keyName that I want
        // prev is aka newMovieInput
        return { ...prev, [keyName]: value };
      });
    };

    
  const handleSubmit = async (event) => {
    event.preventDefault();
    // instead of saving new items to our state
    // we will create a post request to add items to our database
    await addDoc(collection(db, "tasksList"), {
      ...newTaskInput,
    });
    // Clear the form
    setNewTaskInput({
      title: "",
      description: "",
      assign: "",
      start: "",
    });
  };

   
    return (
      <div className="bg-gray-100 min-h-screen w-full text-center flex items-center flex-col gap-5">
        <h1 className="text-purple-800 uppercase font-semibold text-2xl">TODO</h1>
      <div className="flex justify-center items-center gap-6 ">
        <div className="card1 ">
       
     

      


        <form className="form-todo" style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "20px",  
                    padding:"20px"
                }}   
                  onSubmit={handleSubmit}   
                    >
         <label>Title</label>
         <input
            type="text"
            placeholder="Task Title"
            name="title"
            value={newTaskInput.title}
            onChange={handleOnChange}
          />
          <label>Describtion</label>
            <input
            className="desc"
            type="text"
            placeholder="Describtion"
            name="description"
            value={newTaskInput.description}
            onChange={handleOnChange}
          />
          
            <label>Assign</label>
           <input
            type="text"
            placeholder="Assign"
            name="assign"
            value={newTaskInput.assign}
            onChange={handleOnChange}
          />
           <label>Started</label>
           <input
            type="text"
            placeholder="start"
            name="Start"
            value={newTaskInput.start}
            onChange={handleOnChange}
          />

        <div>
        <button
                className="rounded-md bg-purple-800 h-full px-5 py-2 my-5 text-white font-medium rounded-md"
              type="submit" text={"Add new Task"}
              >
               Add Todo Item
              </button>
        </div>

   
    </form>






    <h1 className="text-purple-800 uppercase font-semibold text-2xl">Task List</h1>

    {taskList.map((task) => {
          return (
                 


                    
                      <div className='w-full text-center flex items-center flex-col gap-5 '>
                        <div className="w-96 bg-slate-300 backdrop-blur-lg px-3 py-5 my-5 rounded-md ">
                   
                           <span>{task.title}</span>
                                <Link to={`/task/${task.id}`} key={task.id}>

                                      <button className='bg-white text-blue-600 px-2 py-2 mx-1 font-medium rounded-md' variant="primary">Edit</button>
                                      <button className="bg-white text-green-600 px-2 py-2 mx-1 font-medium rounded-md">Completed</button>
                                      <button className="bg-white text-red-600 px-2 py-2 mx-1 font-medium rounded-md">Delete {}</button>
                                </Link>
                              
                                {/* { document.querySelectorAll('.edit').addEventListener('click', event => {
                              const CONTAINER = document.querySelector(".CONTAINER");
                                CONTAINER.innerHTML = `
                                <h1>hello</h1>
                                `;
                              })
                                } */}

                
                     
                  
</div>
             </div>     
                  
                  );
        })}


        
    
      </div>







    
    
      </div></div>
    
    );

}



export default SingleBoard;