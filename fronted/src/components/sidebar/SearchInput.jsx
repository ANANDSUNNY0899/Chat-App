// import React from "react";
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//     return (
//         <form className="flex items-center gap-2">
//             {/* Input Field */}
//             <input 
//                 type="text" 
//                 placeholder="Search..." 
//                 className="input input-bordered rounded-full h-10  bg-gray-700 text-white"
//             />

//             {/* Button */}
//             <button 
//                 type="submit" 
//                 className="rounded-full bg-sky-500 text-white flex items-center justify-center w-10 h-10"
//             >
//                 <IoSearchSharp className="w-6 h-6 outline-none" />
//             </button>
//         </form>
//     );
// };

// export default SearchInput;


import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className="flex items-center gap-2 px-4 pb-2 border-b border-gray-600">
            {/* Input Field */}
            <input 
                type="text" 
                placeholder="Search..." 
                className="input input-bordered rounded-full h-10 bg-gray-700 text-white flex-1"
            />

            {/* Button */}
            <button 
                type="submit" 
                className="rounded-full bg-sky-500 text-white flex items-center justify-center w-10 h-10"
            >
                <IoSearchSharp className="w-6 h-6 outline-none" />
            </button>
        </form>
    );
};

export default SearchInput;
