import '../app.css';
export default Driver;

function Driver({driver, avatar, teammember, stats}){
    const handleButtonClick = () => {
        window.open(stats); 
    };
    return(
        <article className='driver'>
            <header>
                <img className='driver-avatar' src={avatar} alt="avatar" />
                <div className='info'>
                    <strong className='driver-name'>{driver}</strong>
                    <span className='team-name'>{teammember}</span>
                </div>
            </header>
            <aside className='driver-button-container'>
                <button className='driver-button'onClick={handleButtonClick} >Check Statistics</button>
            </aside>
        </article>
    )
}