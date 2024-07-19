export function Contact() {
    return (
        <div className="flex flex-col items-center">
            <div className="max-w-full px-20 md:px-40 xl:px-80 pt-10 ">
            <h1 className="text-4xl font-bold text-center ">Contact Us</h1>
            <div className="p-10 m-2 font-normal gap-4 text-xl grid grid-cols-2 ">
                <div className="bg-blue-100 p-2 rounded-lg col-span-2 lg:col-span-1">
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
                <div className="col-span-2 lg:col-span-1 flex flex-col items-center rounded-lg p-2">
                    <p className="mb-4 font-semibold">IIT Patna</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.08187194858!2d84.8487163105081!3d25.535649617815988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2aa02a!2sIndian%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1721372213080!5m2!1sen!2sin"
                        width="380"
                        height="100%"
                        style={{ border: 0, padding: "10px", borderRadius: "10px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
        </div>
        
    );
}
