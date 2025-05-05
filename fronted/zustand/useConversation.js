import { create } from 'zustand';
import React from 'react';

const useConversation = create((set) => ({
    selectedConversation: null,
    setElectedConversation: (selectedConversation) => set({selectedConversation}),
    messages:[],
    setMessages: (messages) => ({ messages }),
}));

export default useConversation;