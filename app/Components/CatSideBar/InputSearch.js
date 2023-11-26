"use client"
import React,{useState} from 'react'
import Image from "next/image";
import search from "@/public/search-loupe.svg";
//import { useThemeContext } from '@/app/context/theme';
function InputSearch() {
    //const{inputSearch,setInputSearch}=useThemeContext()
    
    const [inputSearch, setInputSearch] = useState('')
    const inpHandler = (e) => {
      //setInputSearch(e.target.value);
    }
  
    const searchSubmit = () => {
      console.log(inputSearch);
    }
  return (
    <div className="category-search">
        <input placeholder="جستجو" type="text" value={inputSearch} onChange={(e)=>inpHandler(e)} />
        <Image src={search} alt="search"  onClick={()=>searchSubmit()}/>
      </div>
  )
}

export default InputSearch