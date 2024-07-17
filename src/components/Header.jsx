/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import NRDIA from '/assets/nrdia.png';
import IITP from '/assets/clg.png';
export function Header() {
    return (
        <div className='flex justify-between'>
            <img src={NRDIA} alt="" className="navbar-image" />
            <nav className='bg-slate-600 text-white font-bold text-2xl min-h-21 flex items-center relative w-4/5 z-10 rounded-full h-20'>
                <ul className="flex justify-around w-full">
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/aboutclg">About IIT Patna</CustomLink>
                    <CustomLink to="/aboutnrdia">About NRDIA</CustomLink>
                    <CustomLink to="/schedule">Schedule</CustomLink>
                    <CustomLink to="/faq">FAQs</CustomLink>
                    <CustomLink to="/contact">Contact Us</CustomLink>
                </ul>
            </nav>
            <img src={IITP} alt="" className="navbar-image" />
        </div>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    const classn = isActive ? "underline " : " ";
    return (
        <div className={classn + 'hover:bg-slate-400 p-2'}>
            <Link to={to} {...props}>{children}</Link>
        </div>
    );
}
