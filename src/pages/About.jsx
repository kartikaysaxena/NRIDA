/* eslint-disable no-unused-vars */
import NRIDA1 from '/assets/NRIDA1.jfif';
import NRIDA2 from '/assets/NRIDA2.jpg';
import NRIDA3 from '/assets/NRIDA3.jpg';
import NRIDA4 from '/assets/NRIDA4.jpg';
import {Carousel} from '../components/Carousel/Carousel';

export function About() {
    return (
        <div className="items-center max-w-full p-5 pt-5 pb-10">
            <div className="grid grid-cols-8 mt-5">
                <div className="font-normal p-3 text-xl min-w-full col-span-3">
                    <h1 className="text-4xl font-bold text-center mb-10">About NRIDA</h1>
                    <p>National Rural Infrastructure Development Agency (NRIDA) was registered as a society on 14th January, 2002 under the name ‘National Rural Roads Development Agency’ (NRRDA)with the basic objective of extending technical and management support to the Governmentof India in implementation of Pradhan Mantri Gram Sadak Yojana (PMGSY). It got its newname NRIDA in May 2017 after inclusion of rural housing activities in its scope of activities.
                    </p>
                    <br />
                    <p>NRIDA has been instrumental in setting high and uniform technical and management standards and facilitating policy development and planning at Central and State level in order to ensure sustainable management of the rural roads network under PMGSY. Till 9th July, 2024, 1,80,207 (including 100-249) habitations have been connected under the Ist Phase of PMGSY with a total road length of 4,22,731 km. of new connectivity besides upgradation of a total of 2,01,699 km. of road length. A further road length of 49,014 km has been upgraded till 9th July, 2024 under IInd Phase of PMGSY.
                    </p>
                    <br />
                    <p>Link to NRIDA
                    </p>
                    <br />
                    <a href="https://pmgsy.nic.in/" className="text-blue-500 hover:text-blue-300">https://pmgsy.nic.in/
                    </a>
                </div>
                <div className="col-span-5 aspect-video">
                        <CarouselF/>
                </div>
            </div>
        </div>
    );
}


const images = [
    NRIDA1,
    NRIDA2,
    NRIDA3,
    NRIDA4
  ];
  
  function CarouselF()
  {
      return (
        <Carousel images={images} />
      )
  }