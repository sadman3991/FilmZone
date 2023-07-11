import React from 'react'
import { Pagination } from '@mui/material';

export default function CustomPagination({setPage,numOfPages=10}) {

    const handlePageChange =(page)=>{
        setPage(page);
        window.scroll(0,0)
    }
  return (
    <div>
   <Pagination style={{maxWidth:'100%',display:'flex' ,justifyContent:"center",padding:"1rem 0rem",fontSize:'2rem'}} count={numOfPages } onChange={(e)=> handlePageChange(e.target.textContent)} />
    </div>
  )
}
