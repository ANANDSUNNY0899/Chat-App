// import React from "react";

// const GenderCheckbox = ( {onCheckboxChange, selectedGender}) => {
//     return (
//         <div className="flex gap-4">
//             <div className="form-control">
//                 <label className={`label gap-2 cursor-pointer  ${selectedGender === "male" ? "selected": ""}`}>
//                     <span className="label-text">Male</span>
//                     <input type="checkbox" className="checkbox border-slate-900 " 
//                      checked={selectedGender === 'male'}
//                      onChange={() => onCheckboxChange("male")}
//                     />
//                 </label>
//             </div>
//             <div className="form-control">
//                 <label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected": ""}`}>
//                     <span className="label-text">Female</span>
//                     <input type="checkbox" className="checkbox border-slate-900"
//                      checked={selectedGender === 'female'}
//                      onChange={() => onCheckboxChange("female")}
//                     />
//                 </label>
//             </div>
//         </div>
//     );
// };

// export default GenderCheckbox;




import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className="flex gap-4">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selcted": ""} `}>
                    <span className="label-text">Male</span>
                    <input 
                        type="radio" 
                        name="gender"  // Ensure both inputs belong to the same group
                        className="radio border-slate-900"
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selcted": ""}`}>
                    <span className="label-text">Female</span>
                    <input 
                        type="radio"
                        name="gender"  // Ensures only one can be selected at a time
                        className="radio border-slate-900"
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;
