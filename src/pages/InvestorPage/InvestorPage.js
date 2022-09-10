import React, { useState } from "react";
import Sidebar from "../../components/InvestorComp/Sidebar";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Wallet from "./Wallet";
import Setting from "./Setting";
import LiveSupport from "./LiveSupport";
import HistoryTransaction from "./HistoryTransaction";
import Schedule from "./Schedule";
import {
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    sidebarWrapper: {
        backgroundColor: '#9C8430',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    hamburgerSidebar: {
        fontSize: 28,
        color: '#fff',
        padding: 5,
        cursor: 'pointer'
    }
}));

const InvestorPage = () => {
    const classes = useStyles();
    const [currentPage, setCurrentPage] = useState(0)
    const [openSidebar, setOpenSidebar] = useState(true)
    const page = [<Dashboard />, <Projects />, <Wallet />, <HistoryTransaction />, <Setting />, <Schedule />, <LiveSupport />]

    return (
        <div className="row d-flex" style={{ paddingTop: '82px' }}>
            {openSidebar &&
                <div className={`col-2  ${classes.sidebarWrapper}`}>
                    <Sidebar setTabSelected={setCurrentPage} tabSelected={currentPage} />
                    <span onClick={() => setOpenSidebar(!openSidebar)} className={classes.hamburgerSidebar}><i className="fas fa-align-right"></i></span>
                </div>
            }
            <div className={openSidebar ? 'col-10' : 'col-12'} style={{ backgroundColor: '#E0E1E8', height: 'auto' }}>
                {!openSidebar &&
                    <span onClick={() => setOpenSidebar(true)} style={{ fontSize: 28, cursor: 'pointer' }}><i className="fas fa-angle-double-right"></i></span>
                }
                {page[currentPage]}
            </div>
        </div>
    )
}

export default InvestorPage;