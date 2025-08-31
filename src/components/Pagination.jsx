
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import ProductOne from '../assets/product1.jpg'
import axios from 'axios';

function Items({ currentItems }) {
  return (
    <>
      <div className='flex flex-wrap gap-x-[45px]'>
        {currentItems &&
        currentItems.map((item) => (
          <div>
            <Product src={item.thumbnail} title={item.title} price={item.price}/>
          </div>
        ))}
      </div>
    </>
  );
}

function Pagination({ itemsPerPage }) {

  const [itemOffset, setItemOffset] = useState(0);
  const [allData,setAllData]= useState([])

  useEffect(() => {
    async function alldata(){
       let data = await axios.get("https://dummyjson.com/products")
      setAllData(data.data.products)
  
      } 
      alldata()
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = allData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
     <Items currentItems={currentItems} />
        <div className='flex items-center justify-between mt-[50px]'>
        <ReactPaginate
            breakLabel="-----"
            nextLabel=""
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel=""
            renderOnZeroPageCount={null}
            containerClassName="flex"
            pageLinkClassName="py-3 px-5 bg-black text-white mr-5"
        />

        <h1 className='pt-4 text-primary text-sm font-dm font-normal'>
            Products from {itemOffset + 1} to {endOffset < allData.length ? endOffset : allData.length} of {allData.length}
        </h1>
        </div>


    </>
  );
}

export default Pagination