import Director from "/assets/Director.png";
import HoD_CEE from "/assets/HoD_CEE.png";
import Assist_profCEE from "/assets/Assist_profCEE.png";
import Faculty from "/assets/Faculty.png";
import Faculty_2 from "/assets/Faculty_2.png";
import Faculty_3 from "/assets/Faculty_3.png";
import Faculty_4 from "/assets/Faculty_4.png";
const Left_carousel_images = [
  {
    Name: "Professor T. N. Singh",
    Title: "Chief Patrons",
    Description: "Director, IIT Patna",
    Image : Director
  },
  {
    Name: "Dr. Amit Verma",
    Title: "Convenor",
    Description: "HoD CEE, IITP",
    Image : HoD_CEE
  },
  {
    Name: "Dr. Sudhir Varma",
    Title: "Coordinator",
    Description: "Assistant Professor, CEE, IITP",
    Image : Assist_profCEE

  }
];

const Right_carousel_images = [
    {
      Name: "Dr. Sudhir Varma",
      profile: "https://www.iitp.ac.in/people-10/cee-faculty?view=article&id=293&catid=2",
      Image : Assist_profCEE
    },
    {
        Name: "Dr. Ramakrishna Bag",
        profile: "https://www.iitp.ac.in/people-10/cee-faculty?view=article&id=361&catid=2",
        Image : Faculty
    },
    {
        Name: "Dr. Koushik Roy",
        profile: "https://www.koushikroy.com/",
        Image : Faculty_2
    },
    {
        Name: "Dr. Anilkumar Bachu",
        profile: "https://www.iitp.ac.in/~anilkumar/",
        Image : Faculty_3
    },
    {
        Name: "Dr. Syed K. K. Hussaini",
        profile: "https://www.iitp.ac.in/people-10/cee-faculty?view=article&id=279&catid=2",
        Image : Faculty_4
    },
  ];

  const carousel = {Left_carousel_images, Right_carousel_images}
export default carousel
