import { useState } from "react";

const BlogList = ({blogs}) => {

    return ( 
        <article className="blog-list">
            {blogs.map((blog) => (
                <section className="blog-preview" key={blog.id}>
                    <img className="blog-preview--image" src={blog.urlImage} alt=""/>
                    <h2>{blog.title}</h2>
                    <p className="blog-preview--body">{blog.body}</p>
                    <p className="blog-preview--author">Guided by {blog.author}</p>
                </section>
            ) )}
        </article>
     );
}
 
export default BlogList;