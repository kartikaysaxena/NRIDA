import Schedule_img from "/assets/Schedule.jpg";
export function Schedule() {
  return (
    <div className=" my-10">
        <div className="flex justify-center text-center text-xl md:text-2xl xl:text-4xl font-bold pb-10 mx-auto">Schedule</div>

    <div className="flex gap-8 justify-center items-center my-2">
      <div className="h-full hidden sm:block">
        <img src={Schedule_img} alt="" />
      </div>
      <div className="w-[75vw] md:w-[50vw]">
        <ol className="text-lg md:text-xl flex flex-col gap-4">
          <li className="flex flex-col gap-2">
            <span className="text-xl md:text-2xl xl:text-4xl font-bold">DAY-1</span>
            <p>
              Philosophy of flexible pavement design for rural roads. Pavement
              performance parameter and relationship to design. Pavement
              surveys. Typical pavement distresses. Introduction to quality
              control, laboratory and equipments.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <span className="text-xl md:text-2xl xl:text-4xl font-bold">DAY-2</span>
            <p>
              Estimation of traffic <br /> Geotechnical aspects of Pavement
              Design and Construction. <br /> Pavement Composition
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <span className="text-xl md:text-2xl xl:text-4xl font-bold">DAY-3</span>
            <p>
              Pavement Composition & Quality Control <br /> Road geometry and
              safety <br />
              Flexible Pavement Design
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <span className="text-xl md:text-2xl xl:text-4xl font-bold">DAY-4</span>
            <p>
              Flexible Pavement Design & Quality Control <br /> Rigid Pavement
              Design
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <span className="text-xl md:text-2xl xl:text-4xl font-bold">DAY-5</span>
            <p>
              Rigid Pavement Design & Quality Control <br />
              Assessment
            </p>
          </li>
        </ol>
      </div>
    </div>
    </div>
  );
}
