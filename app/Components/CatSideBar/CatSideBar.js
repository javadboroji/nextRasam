"use client"

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import search from "@/public/search-loupe.svg";
import { useSearchParams } from "next/navigation";
import AOS from "aos";
import InputSearch from "./InputSearch";

function CatSideBar() {
  const [data, setData] = useState("");
  const searchparams = useSearchParams();
  const catParent = searchparams.get("catParent");
  const id = searchparams.get("id");

  const api = `http://185.103.129.113:80/api/v1/Category/GetCategoriesByName?categoryId=${catParent}`;

  useEffect(() => {
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((err) => {
        setError(err);
      });

    AOS.init();
    AOS.refresh();
  }, [catParent]);

  /**==============================================
   *                Search Handler
   *  
   *  
   *  
   *  
   *=============================================**/


  const memoizedCatSidebar = useMemo(() => {
    return (
      <div style={{position:'static',top:'0'}}>
        <InputSearch

        />
        <div className="category-cat">
          <p className="pb-3 d-block d-lg-none"> دسته بندی ها</p>
          <p> دسته بندی ها</p>
          <ul>
            {data &&
              data.data.map((cat) => {
                return (
                  <li key={cat.id} className={`${id === cat.id ? 'active-categorey-list' : ''}`}>
                    <Link
                      href={{
                        pathname: "/categoryes",
                        query: { cat: cat.title, id: cat.id, catParent: cat.id },
                      }}
                    >
                      {cat.title}
                    </Link>
                    {cat.subs.length > 0 && (
                      <ul className="categorey-list-ul">
                        {cat.subs.map((subCat) => {
                          return (
                            <li key={subCat.id} className={`${id === subCat.id ? 'active-categorey-list' : ''}`}>
                              <Link
                                href={{
                                  pathname: "/categoryes",
                                  query: {
                                    cat: subCat.title,
                                    id: subCat.id,
                                    catParent: cat.id,
                                  },
                                }}
                              >
                                {" "}
                                {subCat.title}
                              </Link>
                              <span> {subCat.categoryItemCount}</span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }, [data, id]);

  return memoizedCatSidebar;
}

export default CatSideBar;
