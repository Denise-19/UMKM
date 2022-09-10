import React from "react";  
import MUIDataTable from "mui-datatables";

const columns = [
    {
        name: "Name",
    },
    {
        name: "Position",
    },
    {
        name: "Age",
    },
];

const data = [
    {
        "Name": "Joe",
        "Position": "Plumber", 
        "Age": 30
    },
    {
        "Name": "Jane", 
        "Position": "Electrician", 
        "Age": 45
    }
]

const options = {
    filterType: 'dropdown',
};


const Table = () => {
    return (
        <MUIDataTable
            title={"Employee List"}
            data={data}
            columns={columns}
            options={options}
            rowsPerPage={100}
            rowsPerPageOptions={[100, 200, 500, 1000]}
        />
    )
}

export default Table;
