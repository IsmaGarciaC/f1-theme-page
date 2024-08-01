import '../app.css';
export default Team;

function Team({teamname, logo, score, story}){
    const handleButtonClick = () => {
        window.open(story); 
    };
    return(
        <article className='team-container'>
            <header>
                <img className='team-logo' src={logo} alt="logo" />
                <div className='team-info'>
                    <strong className='teamname'>{teamname}</strong>
                    <span className='team-score'>{score}</span>
                </div>
            </header>
            <aside className='team-button-container'>
                <button className='team-button'onClick={handleButtonClick} >Check Story</button>
            </aside>
        </article>
    )
}