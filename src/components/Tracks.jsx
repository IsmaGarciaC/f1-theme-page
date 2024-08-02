import '../app.css';
import spa from '../assets/spa.png'
export default Tracks;
function Tracks({name,image,desc}){ {/*Parameters for each component, in order to reuse them*/}
    return(
        <div className='track-card'>
            <img src={image} alt="image-circuit" />
            <h3>{name}</h3>
            <p>
                {desc}
            </p>
        </div>
    );
}