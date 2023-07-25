import {useParams} from 'react-router-dom';
import useFetch from './useFetch'

const Tour = () => {
    const {id} = useParams(); 
    const {data:blog, isPending, error} = useFetch('http://localhost:8000/blogs/'+id);
    
    return ( <h2>
        {error && <div>{error}</div>}
        {isPending && <div>Loading.....</div>}
        {blog && (
            <article className='blog-preview'>
                <img className="blog-preview--image" src={blog.urlImage} alt=""/>
                <h2>{blog.title}</h2>
                <p className="blog-preview--body">{blog.body}</p>
                <p className="blog-preview--author">Guided by {blog.author}</p>
            </article>
        )}
    </h2> );
}
 
export default Tour;