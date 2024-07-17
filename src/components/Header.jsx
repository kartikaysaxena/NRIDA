/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {Link, useResolvedPath, useMatch} from 'react-router-dom';

export function Header()
{
    return (
        <nav className='bg-slate-600 text-white font-bold text-2xl min-h-20 pt-4'>
            <ul className="flex justify-around">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/aboutclg">About IIT Patna</CustomLink>
                <CustomLink to="/aboutnrdia">About NRDIA</CustomLink>
                <CustomLink to="/schedule">Schedule</CustomLink>
                <CustomLink to="/faq">FAQs</CustomLink>
                <CustomLink to="/contact">Contact Us</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props})
{
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path:resolvedPath.pathname,end:true});
    const classn = isActive ? "underline " : " ";
    return (
        <div className={classn + 'hover:bg-slate-400 p-2'}>
            <Link to={to} {...props}>{children}</Link>
        </div>
    )
}