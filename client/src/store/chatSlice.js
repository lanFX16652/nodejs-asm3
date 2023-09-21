import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const socket = io("ws://localhost:5000");

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        socket,
        roomData: null
    },
    reducers: {
        setRoomData: (state, action) => {
            state.roomData = action.payload
        },
        updateMessages: (state, action) => {
            state.roomData = { ...state.roomData, messages: [...state.roomData.messages, action.payload] }
        }
    }
})

export const selectChatState = (state) => state.chat
export const chatReducer = chatSlice.reducer
export const { setRoomData, updateMessages } = chatSlice.actions