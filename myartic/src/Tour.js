import {useParams} from 'react-router-dom';

const Tour = () => {
    const {id} = useParams(); 
    
    return ( <h2>
        {id}
    </h2> );
}
 
export default Tour;