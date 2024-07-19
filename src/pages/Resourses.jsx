export function Resources() {
  return (
    <>
      <div className=" w-[80vw] mx-auto my-6 mb-10 flex flex-col justify-center h-[60vh]">
        <div className="text-start text-4xl font-bold pb-10 mx-auto">
          Resources
        </div>
        <ol className="flex flex-col w-[70vw] justify-center list-decimal gap-4 mx-auto text-2xl">
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
        <div className="w-[40vw] flex flex-col text-center">
            <p className="text-start text-4xl font-bold pb-10 mx-auto">Web Development Team</p>
            <p className="text-xl font-semibold">Kartikay Saxena, Devansh Rai, Vinay Khedkar</p>
        </div>
        <div className="w-[40vw] flex flex-col text-center">
            <p className="text-start text-4xl font-bold pb-10 mx-auto">Organizing Volunteers</p>
            <p className="text-xl font-semibold">Ajit Kumar, Deepansh Yadav, Koushal Kumar, Rajkamal, Ashish Kumar, Ashutosh Raj</p>
        </div>
      </div>
    </>
  );
}
