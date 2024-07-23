import { useState } from "react";
function Home(){
    const [count,setCount] = useState(0);

    return (
        <>
        <h1>Car Components</h1>
        <div className="counter" 
            style={{ 
                display: "flex", 
                gap: '20px', 
                alignItems: 'center',
                backgroundImage: 'url(https://media.istockphoto.com/id/908021140/photo/silhouette-of-black-sports-car-on-black.webp?b=1&s=170667a&w=0&k=20&c=NrrU9Tjw1FtUnrEU7lHvfgeYmWGxEQzsHljAR8StPh0=)', /* Set your background image */
                backgroundSize: 'cover', /* Make sure the image covers the entire container */
                backgroundPosition: 'center', /* Center the image */
                height: '50vh', /* Set a height for the background to be visible */
                color: 'Black'}}>
            {/*<h6>Counter : {count}</h6>
            <button type="button" class="btn btn-primary" onClick={()=>setCount(count+1)}>Increase</button>
            <button type="button" class="btn btn-secondary" onClick={()=>setCount(count-1)}>Decrease</button>
            */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', width:'100%'}}>
            <div class="d-flex justify-content-center">
                <a class="btn btn-secondary full-width-btn" role="button" aria-disabled="true"> Automotives</a>
                <a class="btn btn-secondary full-width-btn" role="button" aria-disabled="true">Tyres</a>
                <a class="btn btn-secondary full-width-btn" role="button" aria-disabled="true">lubricants</a>
                <a class="btn btn-secondary full-width-btn" role="button" aria-disabled="true">Mechanical parts </a>
            </div>
            </div>
        </div>
        </>
    )
}
export default Home;