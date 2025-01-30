import Todotask from "../Todotask";
import React, { useState } from 'react';
import "./style.css";


var notUrgent="#003049";
var periodic="#29bf12";
var urgent="#a10702";

var taskArray=[{
    category:periodic,
    name: "Timesheet Tracking",
    date: "Every Monday"  
},
{
    category:urgent,
    name: "Case Study",
    date: "Nov 4"   
},
{
    category:notUrgent,
    name: "Project Name Update",
    date: "Nov 1"   
},
{
    category:periodic,
    name: "Program Planning for Next Qtr",
    date: "Nov 10"  
},

{
    category:urgent,
    name: "Nov Strategic Meeting",
    date: "Nov 5"   
},
{
    category:notUrgent,
    name: "Miscellaneous Stuff",
    date: "Quarter End"   
},
{
    category:periodic,
    name: "Sales Report Review",
    date: "Every Friday"   
},
{
    category:urgent,
    name: "Email Follow-up with Marketing Team",
    date: "Nov 3"   
}

]
export default function TodoList() {
    const [listOfTasks, setListOfTasks]=useState(taskArray);



function handleForm(e){
    e.preventDefault(); // prevent page reload
    console.log(e.target.name.value);
    let newTask={
        category: e.target.category.value,
        name: e.target.name.value,
        date:e.target.date.value
    };

    setListOfTasks(
        [
            ...listOfTasks,
            newTask
        ]
    );
}

    return(
        <section>
            <h2 id="task-create">My Task Panel</h2>
            <form onSubmit={handleForm}>
                <div className="formGroup">
                <label htmlFor="name">To-do item:</label>
                <input type="text" id="name" name="name" placeholder="e.g UX Design" required/>
                </div>
                <div className="formGroup">
                <label htmlFor="date">Due Date:</label>
                <input type="text" id="date" name="date" placeholder="e.g Nov 7" required/>
                </div>
                <div className="formGroup">
                <label htmlFor="category">Category:</label>
            <select id="category" name="category" required>
                <option value="" disabled selected>---please select---</option>
                <option value={urgent} style={{ background: urgent }}>Urgent</option>
                <option value={periodic} style={{ background: periodic }}>Periodic</option>
                <option value={notUrgent} style={{ background: notUrgent }}>Not Urgent</option>
            </select>
            </div>
            <button type="submit" className="btn-submit ">Add Task</button>
            </form>
            <div className="colorPanel">
        {
            listOfTasks.map((d)=>(
            <Todotask
            key={d.category+d.name} 
            category={d.category}
            name={d.name}
            date={d.date}
                />
            ))
        }
        </div>
        </section>
        
    )
}