import carousel from "../../data/carousel_data";

export default function Right_Carousel() {
  return (
    <div className="grid grid-cols-1 grid-rows-5 gap-0 px-2 text-[15px]">
    {carousel.Right_carousel_images.map((data)=> <div className="flex flex-col items-center" key={data.Name}>
      <img className="w-[65px]" src={data.Image} alt="" />
      <p>{data.Name}</p>
      <a className="text-blue-400 hover:text-blue-200" href={data.profile}>Profile</a>
    </div>)}
  </div>
  )
}
