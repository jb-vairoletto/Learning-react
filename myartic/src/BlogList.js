import { Link } from 'react-router-dom'

const BlogList = ({blogs}) => {

    return ( 
        <article className="blog-list">
            {blogs.map((blog) => (
                <section className="blog-preview" key={blog.id}>
                    <Link to={`/tour/${blog.id}`}>
                        <img className="blog-preview--image" src={blog.urlImage} alt=""/>
                        <h2>{blog.title}</h2>
                        <p className="blog-preview--body">{blog.body}</p>
                        <p className="blog-preview--author">Guided by {blog.author}</p>
                    </Link>
                </section>
            ) )}
        </article>
     );
}
 
export default BlogList;