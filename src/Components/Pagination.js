import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Pagination = () => {
  const {page, totalPages,handleChange} =useContext(AppContext);
  return (
    <div className='w-full border bg-slate-400 p-3 fixed bottom-0 flex justify-around '>
    <div className='flex gap-x-3'>
    {
        page >1 &&
        <button onClick={() =>handleChange(page-1)} className='border text-sm px-2 rounded-md bg-slate-50 ' >Previous</button>  
      }
      {
        page<totalPages &&
        <button onClick={()=> handleChange(page+1)} className='border text-sm px-2 rounded-md bg-slate-50' >Next</button>
      }
    </div>
     
      <p className='text-xs font-bold'>Page {page} of {totalPages}</p>
    </div>
  )
}

export default Pagination;
