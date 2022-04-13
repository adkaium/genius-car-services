import React from 'react';
import './Exparts.css';
import expart1 from '../../../images/experts/expert-1.jpg';
import expart2 from '../../../images/experts/expert-2.jpg';
import expart3 from '../../../images/experts/expert-3.jpg';
import expart4 from '../../../images/experts/expert-4.jpg';
import expart5 from '../../../images/experts/expert-5.jpg';
import expart6 from '../../../images/experts/expert-6.png';
import Expart from '../Expart/Expart';

const experts = [
    { id: 1, name: 'Will Smith', img: expart1 },
    { id: 2, name: 'Chris Rock', img: expart2 },
    { id: 3, name: 'Dwayne Rock', img: expart3 },
    { id: 4, name: 'Messy vai', img: expart4 },
    { id: 5, name: 'Ronaldo Bro', img: expart5 },
    { id: 6, name: 'Srachy Jhonson', img: expart6 },
]

const Exparts = () => {


    return (
        <div className='container' id='exparts'>
            <h1 className='text-primary text-center'>Our exparts </h1>
            <div className='row'>
                {
                    experts.map(expert => <Expart
                        key={expert.id}
                        expert={expert}
                    ></Expart>)
                }
            </div>

        </div>
    );
};

export default Exparts;