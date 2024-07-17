import carousel from "../../data/carousel_data";

export default function Left_carousel() {
  return (
    <div className="grid grid-cols-1 grid-rows-3 items-center p-8">
      {carousel.Left_carousel_images.map((data) => (
        <div className="flex flex-col items-center" key={data.Name}>
          <img className="w-[100px]" src={data.Image} alt="" />
          <p>{data.Title}</p>
          <p>{data.Name}</p>
          <p>{data.Description}</p>
        </div>
      ))}
    </div>
  );
}
