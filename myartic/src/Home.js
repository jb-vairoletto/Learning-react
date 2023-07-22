import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs,setBlogs] = useState([
        { 
            title: 'Photo session with Northern Lights', 
            urlImage: 'https://imgcdn.bokun.tools/5f2e7676-77b5-4561-9d21-c55db7124496.jpeg?fm=auto&mode=crop&crop=faces&dpr=1&w=596&h=450',
            body: 'Embark on a Northern Lights Photo Experience tour and witness the awe-inspiring beauty of the aurora borealis in Rovaniemi, Finland. ', 
            author: 'Matias', 
            id: 1
        },
        { 
            title: 'Hiking in riisitunturi Natural Park', 
            urlImage: 'https://imgcdn.bokun.tools/534b31fa-52c9-4325-bb1c-f5b4b5c25435.jpeg?fm=auto&mode=crop&crop=faces&dpr=1&w=596&h=450',
            body: 'Experience the ultimate adventure in Riisitunturi National Park', 
            author: 'Valeriia', 
            id: 2
        },
        { 
            title: 'Reindeer Farm Visit With Photos', 
            urlImage: 'https://imgcdn.bokun.tools/9e88e778-b127-46e9-9aa8-6335f94e900e.jpeg?fm=auto&mode=crop&crop=faces&dpr=1&w=596&h=450',
            body: 'A visit to a reindeer farm is a magical experience that is sure to leave you with lasting memories.', 
            author: 'Emmairo', 
            id: 3
        }
    ]);

    //let name = 'vairo';

    return ( 
        <div className="home" >
            <BlogList blogs={blogs}/>
        </div>
     );
}
 
export default Home;