import React from "react";


 const Searchbar=({OnSearch})=>{
      return(
        <div className="">
            <input 
            className="bg-light-blue pa2 ma2" 
            type="search" 
            placeholder="search robots"
            onChange={OnSearch}

            />

        </div>
      );
      }


 export default Searchbar;