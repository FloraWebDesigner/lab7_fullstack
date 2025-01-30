import Taskreason from "../TaskReason";
import "./style.css"

var reasonArray=[
    {
        url:"/category.jpg",
        title:"Clear Categorization",
        desc:"Not sure how to get started? Let's say goodbye to all the messy requests."
    },
    {
        url:"/color.jpg",
        title:"Colorful Alert",
        desc:"Distracted by reading text messages? It's the visual perception that's intuitive."
    },
    {
        url:"/effective.jpg",
        title:"Greater Efficiency",
        desc:"Working on multiple tasks at once? You can do it with ease."
    }
];

export default function ReasonList() {    
    return(
        <section>
            <div className="homepage">
            <h2>Make Life Simple, Make Work Easy</h2>
            <p>Welcome to the task management application, and we always focus on your work status!</p>
            <a className="btn-start" href="#task-create">Get Started</a>
            </div>
        <div className="card">
            {reasonArray.map((t)=> (
                <Taskreason 
                    key={t.title+t.desc}
                    url={t.url}
                    title={t.title}
                    desc={t.desc}
                />
            ))}
        </div>
        </section>
    )
}