import React, {Fragment, useState} from 'react';
import {Menu, Transition } from "@headlessui/react";
import {BiChevronDown} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {HiMenuAlt3} from 'react-icons/hi';
import {AiOutlineClose, AiOutlineLogout} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const user = {};
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className='relative bg-[#f7fdfd] z-50'>
        <div className='container mx-auto flex items-center justify-between p-5'>
          <div>
          <Link to='/' className='text-blue-600 font-bold text-2xl'>
      Job<span className='text-blue-300'>Finder</span>
    </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar