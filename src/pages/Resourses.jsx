export function Resources() {
  return (
    <>
      <div className=" w-[80vw] mx-auto mb-10 mt-10 flex flex-col justify-center h-[55vh]">
        <div className="text-start text-lg md:text-2xl xl:text-4xl font-bold pb-4 mx-auto">
          Resources
        </div>
        <ol className="flex flex-col  md:w-[70vw] justify-center list-decimal gap-4 mx-auto text-sm md:text-lg xl:text-2xl">
          <li>
            IRC:SP:72 - 2015, Guidelines for the Design of Flexible Pavements
            for Low Volume Rural Roads
          </li>
          <li>
            IRC:SP:62 Guidelines for the Design and Construction of Cement
            Concrete Pavement for Rural Roads was published by Indian Roads
            Congress(IRC)
          </li>
          <li>
            IRC:37-2018 Guidelines for the Design of Flexible Pavements (Second
            Revision), Indian Roads Congress.
          </li>
          <li>MoRD Specifications for Low Volume Roads</li>
          <li>AASHTO Guide for Design of Pavement Structures, AASHTO, 1993</li>
        </ol>
      </div>

      <div className="mx-auto flex justify-evenly">
        <div className="w-[40vw] mt-3 flex flex-col text-center">
            <p className="text-[16px] md:text-2xl xl:text-4xl font-bold md:pb-3 xl:pb-10 mx-auto">Web Development Team</p>
            <p className="md:text-lg xl:text-2xl text-sm">Kartikay Saxena, Devansh Rai, Vinay Khedkar</p>
        </div>
        <div className="w-[40vw] mt-3 flex flex-col text-center">
            <p className="text-[16px] md:text-2xl xl:text-4xl font-bold md:pb-3 xl:pb-10 mx-auto">Organizing Volunteers</p>
            <p className="md:text-lg xl:text-2xl text-sm">Ajit Kumar, Deepansh Yadav, Koushal Kumar, Rajkamal, Ashish Kumar, Ashutosh Raj</p>
        </div>
      </div>
    </>
  );
}
