import React from "react";


function TimeLocation() {
    const date = new Date();
    const dateAsString = date.toString();
    const timezone = dateAsString.match(/\(([^\)]+)\)$/)[1];
    const current = new Date();
    const time = current.toLocaleTimeString("en-US");

    return <div>
        <div className="flex items-center justify-center my-5">
            <p className="text-white text-xl font-extralight">
                {timezone}
            </p>
        </div >
        <div className="flex items-center justify-center my-2">
            <p className="text-white text-xl font-extralight">
                {time}
            </p>
        </div>
    </div >
}



export default TimeLocation