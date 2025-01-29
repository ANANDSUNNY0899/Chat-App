import React from 'react';
import Conversation from './Conversation';


const Conversations = () => {
    return (
        <div className='py flex flex-col overflow-auto'>
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            
        </div>   
    );
};

export default Conversations;


// import React from 'react';

// import Conversation from './Conversation';

// const Conversations = () => {
//     return (
       
//             <div className="flex flex-col px-4 overflow-auto">
//                 <Conversation />
//                 <Conversation />
//                 <Conversation />
//                 <Conversation />
//             </div>
        
//     );
// };

// export default Conversations;
