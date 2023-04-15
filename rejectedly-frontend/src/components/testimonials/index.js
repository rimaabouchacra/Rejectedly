import './index.css'
import React from 'react';
import person1 from '../../images/person1.png'
import person2 from '../../images/person2.png'
import person3 from '../../images/person3.png'

const Testimonials = () => {
return(

    <div>
        <h1 className='testimonials-title'>User Testimonials</h1>
        <div className='persons-container'>
            <div className='person'>
                <img className='person-img' src={person1} alt="p1" />
                <p className='title'>John Anderson</p>
                <p>“Thanks to Rejectedly, I was able to turn my rejection into a learning opportunity and improve my approach for future submissions.”</p>
            </div>
            <div className='person'>
                <img className='person-img' src={person2} alt="p3" />
                <p className='title'>Adriana Wilson</p>
                <p>“The Rejection Circles feature was a game-changer for me. Collaborating with other rejected applicants helped me gain improve my chances of success.”</p>
            </div>
            <div className='person'>
                <img className='person-img' src={person3} alt="p3" />
                <p className='title'>Mark Morte</p>
                <p>“Rejectedly's marketplace helped me showcase my rejected ideas to potential clients. I received numerous job offers and opportunities that I wouldn't have found otherwise.”</p>
            </div>
            

        </div>
    </div>
)
}
export default Testimonials