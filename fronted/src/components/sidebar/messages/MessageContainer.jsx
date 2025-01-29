import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const noChatSelected = true;

    return (
        <div 
            className="md:min-w-[450px] flex flex-col bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 rounded-3xl"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        >
            {noChatSelected ? (
                <NoChatSelected />
            ) : (
                <>
                    {/* Header Section */}
                    <div className="px-4 py-2">
                        <span className="label-text">To:</span>
                        <span className="text-gray-900 font-bold ml-2">Sunny Anand</span>
                    </div>

                    {/* Messages Section */}
                    <div className="flex-1 overflow-auto px-4">
                        <Messages />
                    </div>

                    {/* Message Input */}
                    <MessageInput />
                </>
            )}
        </div>
    );
};

export default MessageContainer;

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 Sunny Anand 🌄</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    );
};
