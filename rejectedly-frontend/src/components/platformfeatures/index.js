import './index.css'
import React from 'react';
import analysis from '../../images/analysis.png'
import collaboration from '../../images/collaboration.png'
import lamp from '../../images/lamp.png'

const Platform = () => {
return(

    <div>
        <h1 className='features-title'>Platform Features</h1>
        <div className='features-container'>
            <div className='feature'>
                <img className='feature-img' src={analysis} alt="analysis" />
                <p className='title'>Rejection Analysis</p>
                <p>AI-powered platform that analyses personalized feedback on rejected submissions, identifies areas for improvement and gives actionable suggestions. </p>
            </div>
            <div className='feature'>
                <img className='feature-img' src={collaboration} alt="collaboration" />
                <p className='title'>Collaborative Improvement</p>
                <p>Allows users to create a profile and receive feedback from the community. In addition, create "Rejection Circles" with others having similar rejections or have expertise in the relevant field.</p>
            </div>
            <div className='feature'>
                <img className='feature-img' src={lamp} alt="lamp" />
                <p className='title'>Rejection-to-Opportunity</p>
                <p>Rejectedly will feature a marketplace where users can showcase their rejected stories and connect with potential clients or collaborators, in order to have a second chance to success.</p>
            </div>
            

        </div>
    </div>
)
}
export default Platform