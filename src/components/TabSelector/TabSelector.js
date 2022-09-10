import React, { useState } from "react";

const TabSelector = () => {
    let [isActiveIndex, setIsActiveIndex] = useState(0)
    return(
        <div className="d-flex align-items-center" style={{ backgroundColor: 'white', borderRadius: 9, width: '41.5%'}}>
            <button style={{ backgroundColor: isActiveIndex === 0 ? '#D2B038':'white', borderRadius: 9, marginTop: 5, marginBottom: 5, marginLeft: 4, borderWidth: isActiveIndex === 0 ? 1: 0 }} onClick={() => setIsActiveIndex(0)}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: isActiveIndex === 0 ? 'white' : '#777777'}}>All Transaction</span>
            </button>
            <button style={{ backgroundColor: isActiveIndex === 1 ? '#D2B038':'white', borderRadius: 9, marginTop: 5, marginBottom: 5, marginLeft: 4, borderWidth: isActiveIndex === 1 ? 1: 0 }} onClick={() => setIsActiveIndex(1)}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: isActiveIndex === 1 ? 'white' : '#777777'}}>Complete</span>
            </button>
            <button style={{ backgroundColor: isActiveIndex === 2 ? '#D2B038':'white', borderRadius: 9, marginTop: 5, marginBottom: 5, marginLeft: 4, borderWidth: isActiveIndex === 2 ? 1: 0 }} onClick={() => setIsActiveIndex(2)}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: isActiveIndex === 2 ? 'white' : '#777777'}}>Pending</span>
            </button>
            <button style={{ backgroundColor: isActiveIndex === 3 ? '#D2B038':'white', borderRadius: 9, marginTop: 5, marginBottom: 5, marginLeft: 4, borderWidth: isActiveIndex === 3 ? 1: 0 }} onClick={() => setIsActiveIndex(3)}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: 14, color: isActiveIndex === 3 ? 'white' : '#777777'}}>Canceled</span>
            </button>
        </div> 
    )
}

export default TabSelector;