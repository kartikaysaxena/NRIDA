import Director from "../../public/assets/Director.png";
import HoD_CEE from "../../public/assets/HoD_CEE.png";
import Assist_profCEE from "../../public/assets/Assist_profCEE.png";
import Faculty from "../../public/assets/Faculty.png";
import Faculty_2 from "../../public/assets/Faculty_2.png";
import Faculty_3 from "../../public/assets/Faculty_3.png";
import Faculty_4 from "../../public/assets/Faculty_4.png";
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
      profile: "",
      Image : Assist_profCEE
    },
    {
        Name: "Dr. Sudhir Varma",
        profile: "",
        Image : Faculty
    },
    {
        Name: "Dr. Sudhir Varma",
        profile: "",
        Image : Faculty_2
    },
    {
        Name: "Dr. Sudhir Varma",
        profile: "",
        Image : Faculty_3
    },
    {
        Name: "Dr. Sudhir Varma",
        profile: "",
        Image : Faculty_4
    },
  ];

  const carousel = {Left_carousel_images, Right_carousel_images}
export default carousel
