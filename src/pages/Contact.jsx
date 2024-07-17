export function Contact()
{
    return(
        <div className="items-center max-w-full px-80 pt-20">
            <h1 className="text-4xl font-bold text-center">Contact Us</h1>
            <div className="p-10 font-normal text-xl max-w-7xl m-5 grid grid-cols-5 bg-yellow-100">
                <div className="bg-blue-100 p-5 col-span-3">
                    <p>Sudhir Varma, Ph.D.</p>
                    <br/>
                    <p>Assistant Professor</p>
                    <br/>
                    <p>Department of Civil and Environmental Engineering</p>
                    <br/>
                    <p>Indian Institute of Technology, Patna</p>
                    <br/>
                    <p>Bihta, Bihar 801106</p>
                    <br/>
                    <p>Email: svarma@iitp.ac.in, sudhirvarma5@gmail.com</p>
                    <br/>
                    <p>Phone: 0612-3028705, Mob: +91 8434081334</p>
                    <br/>
                </div>
                <div className="ml-20 bg-red-300 col-span-2">
                    <p>Indian Institute of Technology Patna is one of the new IITs established by an Act of the Indian Parliament on August 06, 2008.</p>
                </div>    
            </div>
        </div>
        
    );
}