/* eslint-disable no-unused-vars */

import iitp1 from '/assets/iitp1.jpeg';
import iitp2 from '/assets/iitp2.jpeg';
import iitp3 from '/assets/iitp3.jpeg';
import iitp4 from '/assets/iitp4.jpg';
import iitp5 from '/assets/iitp5.webp';
import iitp6 from '/assets/iitp6.jpg';
import iitp7 from '/assets/iitp7.jpeg';
import iitp8 from '/assets/iitp8.jpg';
import {Carousel} from '../components/Carousel/Carousel';

export function AboutClg()
{
    return(
        <div className="items-center max-w-full p-5 pt-5 pb-10">
            <div className="grid grid-cols-8 mt-5">
                <div className="font-normal p-2 text-xl min-w-full col-span-8 lg:col-span-3">
                    <h1 className="text-4xl font-bold text-center mb-10">About IIT Patna</h1>
                    <p>Indian Institute of Technology Patna is one of the new IITs established by an Act of the Indian Parliament on August 06, 2008.</p>
                    <br/>
                    <p>Patna which was known as Patliputra has been a center of knowledge since long has been attracting visitors and scholars from many parts of the world such as China, Indonesia, Japan, Korea, Sri Lanka, among others. This has been a land of visionaries. Some of the legends from this region include Lord Gautam Buddha, Lord Mahavir, Guru Gobind Singh, the famous astronomer Aryabhatta and the first President of India, Dr. Rajendra Prasad.</p>
                    <br/>
                    <p>IIT Patna has ten departments: These are Computer Science & Engineering, Electrical Engineering, Mechanical Engineering, Chemical and Biochemical Engineering, Civil & Environmental Engineering, Materials Science & Engineering, Chemistry, Physics, Mathematics and Humanities & Social Science departments.</p>
                    <br/>
                    <p>IIT Patna campus is located at Bihta which is approximately 40 kms from Patna. For driving directions and contact details, please point your browser to the following link:</p>
                    <br/>
                    <a href="https://www.iitp.ac.in/index.php/en-us/contact?id=190" className="text-blue-500 hover:text-blue-300">https://www.iitp.ac.in/index.php/en-us/contact?id=190</a>      
                </div>
                <div className="col-span-8 lg:col-span-5 aspect-video">
                    <CarouselF/>
                </div>
            </div>  
        </div>
    );
}

const images = [
    iitp1,
    iitp2,
    iitp3,
    iitp4,
    iitp5,
    iitp6,
    iitp7,
    iitp8
];

function CarouselF()
{
    return (
      <Carousel images={images} />
    )
}