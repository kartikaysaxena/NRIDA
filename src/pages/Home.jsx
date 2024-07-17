import Left_carousel from "../components/Carousel/Left_carousel";
import Right_Carousel from "../components/Carousel/Right_Carousel";

export function Home() {
  return (
    <div className="flex justify-center">
        <Left_carousel/>
      <div className="flex justify-center items-center text-xl w-2/5 mx-auto">
        <p className="text-center">
          5-Days Workshop on “Design and Quality Control of Flexible and Rigid
          Pavements” 24th to 28th July 2024, Funded by NRIDA Ministry of Rural
          Development
        </p>
      </div>
      <Right_Carousel/>
    </div>
  );
}
