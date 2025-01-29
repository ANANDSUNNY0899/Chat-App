import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/sidebar/messages/MessageContainer';


const Home = () => {
  return (
    <div
    className="flex sm:h-[450px] md:h-[550px] rounded-3xl overflow-hidden bg-gray-400 bg-clip-padding
      backdrop-filter backdrop-blur-lg bg-opacity-0"
    style={{
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Optional: Explicitly define transparency
    }}
  >
    <Sidebar />
    <MessageContainer />
  </div>
  );
};
export default Home;