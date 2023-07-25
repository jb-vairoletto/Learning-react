import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [favorite, setFavorite] = useState('Rodrigo');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const contactMessage = {name, email, subject, message, favorite};
        const options = {
            method: 'POST',
            headers:{"Content-type": "application/json"},
            body: JSON.stringify(contactMessage)
        }
        fetch('http://localhost:8000/messages', options)
        .then(() => {
            setIsPending(false);
            history.push('/');
        })
    }   
    
    return ( 
        <div className="contact-form">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: *</label>
                <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label>Email: *</label>
                <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <label>Subject:</label>
                <input 
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)} 
                />
                <label>Message:</label>
                <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
                <label> Select your favorite</label>
                <select
                value={favorite}
                onChange={(e) => setFavorite(e.target.value)}
                >
                    <option value='Matt'>Matt</option>
                    <option value='Valeriia'>Valeriia</option>
                    <option value='Emma'>Emma</option>
                    <option value='Rodrigo'>Rodrigo</option>
                </select>
                {!isPending && <button>Submit</button>}
                {isPending && <button>Submitting</button>}
            </form>
        </div>
     );
}
 
export default Contact;