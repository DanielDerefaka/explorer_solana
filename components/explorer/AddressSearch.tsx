"use client";

import { useForm } from "react-hook-form";
import bs58 from "bs58";
import { useAtom } from "jotai";
import { Search, SearchCheck, SearchCheckIcon } from "lucide-react";
import React, { useState } from "react";
import { queryAtom } from "@/components/state/StateValue";
import TxDetailsCard from "./TxDetails";
import { Dispatch, SetStateAction } from 'react';

interface Query {
  searchValue: string;
  searchType: 'address' | 'signature';
}



interface Data {
  query: string;
}



const AddressSearch = () => {
  const [query, setQuery] = useAtom(queryAtom);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const decoded = bs58.decode(data.query);
    if (decoded.length === 32) {
      setQuery({ searchValue: data.query, searchType: "address" });
    } else if (decoded.length === 64) {
      setQuery({ searchValue: data.query, searchType: "signature" });
    } else {
      console.log("Input not address neither signature");
    }
  };

  return (


    <>  
     <form onSubmit={handleSubmit(onSubmit)}>
     <div className=" border rounded-lg z-10 flex justify-between">
       
         <input
    
        id="query"
        className="w-full  z-50  border-slate-950 dark:border-green-[1px] bg-transparent dark:text-gray-300 text-black-100 text-sm h-[70px] rounded-[20px] focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20 
"
        placeholder="Search address, tx hash, block, etc . "
        {...register("query")}
       
      />

      <div className="p-5">
        <button onClick={onSubmit} className="cursor-pointer">
          <Search />
        </button>

      </div>


      

    </div>
    </form>

    {query?.searchType === "signature" && <TxDetailsCard />}

    </>

  );
};

export default AddressSearch;
