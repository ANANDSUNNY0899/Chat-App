import React from 'react'


const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 item-center hover:bg-sky-300 rounded p-2 py-1 cursor-pointer'>
        <div className="avatar online">
            <div className="w-24 rounded-full">
               <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
               alt="Tailwind-CSS-Avatar-component"
                 />
            </div>
        </div>

        <div className='flex flex-col flex-1'>
           <div className='flex gap-3 justify-between'>
             <p className='font-bold text-gray-200'>Sunny Anand</p>
             <span className='text-xl'>😊</span>
           </div>
       </div>
   </div>

   <div className='divider my-0 py-0 h-1' />
   </>
  );
};

export default Conversation;