import React from 'react'
import Heading from './Heading'
export default function DualInfo({heading}) {
    return (
        <section className="my-4 bg-theme">
        <div className="container">
            <Heading title={heading} />
            <div className="row">
                 <div className="col-8 mx-auto">
                    <p className=" text-dark  ">
                
                    I grew up in a small city in India. I have professional experience of 16months as a junior software engineer.
                    In the span of 16months, I worked on two projects on differnet platorms.
                    Currently, I am pursuing master of Internetworking at Dalhousie University, Halifax, Nova Scotia. In this year,
                    I am planning to work on more complex projects and learn some Technologies. Coming to my hobbies I enjoy playing 
                    Cricket and listening to music.
                
                    </p>
                    </div>
                    <div className='col-3 mx-6 my-2'>
                 <div className="card" >
                   <img src="https://visualmodo.com/wp-content/uploads/2018/04/Using-GitHub-To-Improve-Workflow-3.jpg" className="card-img-top" alt="image goes here"/>
                   <div className="card-body">
                   <h5 className="card-title">My projects</h5>
                <p className="card-text">I am happy to share my work.</p>
               <a href="https://www.github.com/parupallihemanth" className="btn btn-primary">Go to GitHub</a>
            </div>
             </div>
                 </div>
        </div>  
        </div>  
        </section>    
    )
}
