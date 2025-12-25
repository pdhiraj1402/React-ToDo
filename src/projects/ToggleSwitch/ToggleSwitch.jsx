import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";

export const ToggleSwitch = () => 
{
    const [isOn, setIsOn] = useState(false);
    const toggleswitch = {backgroundColor : isOn ? " #4caf50" : "#f44336"};
    const handleToggleSwitch = () =>
    {
        setIsOn(!isOn);
    }
    return (
        <>
        <h1>Toggle Switch
        <IoIosSwitch /></h1>
            <div className = "toggle-switch"
                    style = {toggleswitch}
                    onClick={handleToggleSwitch}>
                <div className = {`switch ${isOn ? "on" : "off"}`}>
                    <span className = "switch-state"> {isOn ? "On" : "Off"} </span>
                </div>
            </div>
        </>
    )
}