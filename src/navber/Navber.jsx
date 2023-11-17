import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaXmark } from "react-icons/fa6";
const Navber = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
  
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
  
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos, visible]);
  
    const navbarClasses = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-100%]';
   



    const Navber = [
        { id: '1abc', name: "Falcon 9", path: "/" },
        { id: '2cde', name: "Falcon Heavy", path: "/" },
        { id: '3def', name: "Dragan", path: "/" },
        { id: '4efg', name: "Starship", path: "/" },
        { id: '5fgh', name: "Human spaceefight", path: "/" },
        { id: '6ghi', name: "Rideshare", path: "/" },
        { id: '7hij', name: "Rideshare", path: "/" },
        { id: '9ijk', name: "Starshield", path: "/" },
        { id: '10jkl', name: "Starlink", path: "/" },

    ];

    const [open,setopen]=useState(false);
    return (
        <div className='text-white z-50'>

            <div className='uppercase '>
            <div style={{maxWidth: '1650px'}} className={`fixed top-0 right-0 left-0 ms-auto flex px-6 py-10 items-center justify-between font-serif font-bold bg-transfarent   p-4 transition-all duration-300 ${navbarClasses} `}>
                <div className='flex gap-8 items-center max-2xl:mx-auto'>
                <div className='pr-5  text-3xl max-sm:text-2xl'>
                    <h1 className='text-white'>Space X</h1>
                </div>
                <div>
                    <ul className='max-2xl:hidden flex gap-4 text-sm'>
                        {
                            Navber.map((routelink) => (
                                <NavLink key={routelink.id} route={routelink}></NavLink>
                            ))}
                    </ul>

                </div>
                </div>


                <div className='text-end flex items-center text-sm gap-5 absolute right-5 pr-7'>
                <Link to={'https://www.facebook.com/'} className='max-sm:hidden animation1 relative' target='_blank'>Shop</Link>
                <div className='' onClick={()=>setopen(!open)}>
                <FaBars />
                
                </div>
                
                </div>


                <div style={{height:'100vh'}} className={`bg-black w-96 max-sm:w-80  text-sm pr-5 text-white  absolute top-0 duration-700 ${open ? 'right-0': '-right-full'}  ` }>
                    <div className='flex flex-col relative  text-end pl-14 pt-14 pr-6 max-2xl:pt-5'>
                        <div onClick={()=>setopen(!open)} className='cursor-default  flex justify-end '><FaXmark /></div>
                        <ul className='gap-4   divide-y divide-gray-500   2xl:hidden'>
                        {
                            Navber.map((routelink) => (
                                <NavLink  key={routelink.id} route={routelink}></NavLink>
                            ))}
                        </ul>
                        <div className='flex flex-col '>
                        <Link className=' py-3 border-b border-gray-500'>Mission</Link>
                        <Link className=' py-3  border-b border-gray-500'>Launches</Link>
                        <Link className=' py-3  border-b border-gray-500'>carrers</Link>
                        <Link className=' py-3  border-b border-gray-500'>Update</Link>
                        <Link className=' py-3  border-b border-gray-500'>Shop</Link>
                        
                        </div>
                    </div>

                </div>

            </div>

            </div>

        </div>
    );
};

export default Navber;