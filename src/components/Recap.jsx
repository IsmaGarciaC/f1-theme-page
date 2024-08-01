import '../app.css';
export default Recap;

function Recap({url}){
    const handleButtonClick = () => {
        window.open(url); 
    };
    return(
        <button className='url-youtube' onClick={handleButtonClick}>CLICK HERE</button>
    )
}