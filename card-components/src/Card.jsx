import villainImage from './assets/villain.jpg'


export default function Card() {
    return(
        <div className='card'>
            <img className='card-image' src={villainImage} alt="The Villian image"></img>
            <h2 className='card-title'>Villian</h2>
            <p className='card-text'>I am the Villian, I will find you and I will kill you!</p>
        </div>
    );
}

// export default Card