import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header() {
const path = useLocation().pathname;

return (
   <header style={{ borderBottom: '1px solid #ccc', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
   {/* Logo and Blog Name */}
   <Link to='/' style={{ textDecoration: 'none', color: 'black', fontSize: '1.2rem', fontWeight: 'bold' }}>
      <span style={{ padding: '5px', background: 'linear-gradient(to right, indigo, purple, pink)', borderRadius: '5px', color: 'white' }}>
         Sahand's
      </span>
      Blog
   </Link>

   {/* Search Input and Button */}
   <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <form style={{ display: 'flex', alignItems: 'center' }}>
         <input
         type='text'
         placeholder='Search...'
         style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }}
         />
         <button type='submit' style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
         <AiOutlineSearch size={20} />
         </button>
      </form>

      {/* Sign In Button */}
      <Link to='/sign-in'>
         <button style={{ padding: '5px 10px', background: 'linear-gradient(to right, purple, blue)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
         Sign In
         </button>
      </Link>
   </div>

   {/* Navigation Links */}
   <nav style={{ display: 'flex', gap: '15px' }}>
      <Link to='/' style={{ textDecoration: 'none', color: path === '/' ? 'blue' : 'black' }}>Home</Link>
      <Link to='/about' style={{ textDecoration: 'none', color: path === '/about' ? 'blue' : 'black' }}>About</Link>
      <Link to='/projects' style={{ textDecoration: 'none', color: path === '/projects' ? 'blue' : 'black' }}>Projects</Link>
   </nav>
   </header>
);
}