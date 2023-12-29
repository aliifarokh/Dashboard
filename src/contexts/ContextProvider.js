import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [currentColor, setCurrentColor] = useState("#03c9d7")
    const [currentMode, setCurrentMode] = useState("Light")
    const [themeSettings, setThemeSettings] = useState(false)

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true})
    }
    const handleClick2 = (clicked) => {
        setIsClicked({...initialState, [clicked]: false})
    }

    const setMode = (e) => {
        setCurrentMode(e.target.value)

        localStorage.setItem('colorMode', e.target.value)
        setThemeSettings(false)
    }

    const setColor = (color) => {
        setCurrentColor(color)

        localStorage.setItem('themeMode', color)
        setThemeSettings(false)
    }

    const [screenSize, setScreenSize] = useState(undefined)

    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,
            currentMode,
            themeSettings,
            setThemeSettings,
            setColor,
            setMode,
            handleClick2
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)