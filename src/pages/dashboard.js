import AppLayout from '@/components/Layouts/AppLayout'
import Table from '@/components/Table';
import ToolBar from '@/components/ToolBar';
import Head from 'next/head'
import { createContext, useEffect, useState } from 'react';
export const viewContext = createContext({});
import MOCK_DATA from '../../public/MOCK_DATA.json'
const Dashboard = () => {
    const [view, setView] = useState('Dashboard');
    const [active, setActive] = useState(0);
    const [headers, setHeaders] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setHeaders(() => Object.keys(MOCK_DATA[0]).filter(e => e !== 'id'));
        setRows(MOCK_DATA);
    }, []);

    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    };
    return (
        <viewContext.Provider value={{ view, setView }}>
            <AppLayout>
                <Head>
                    <title> {view} </title>
                </Head>

                <header className="bg-white">
                    <div className="p-6 max-w-8xl mx-auto sm:px-6 lg:px-8">
                        {view}
                    </div>
                </header>

                <div className="p-4 border-gray-200">
                    <ul className="mx-4 flex flex-wrap -mb-px text-sm font-medium text-center">
                        <li className="border border-white bg-astudio flex items-center" style={{ backgroundColor: active === 0 ? '#E1F4F5' : '#C0E3E5' }} role="presentation">
                            <button className="inline-block p-4 rounded-t-lg" onClick={handleClick} id={0}>All {view}</button>
                            {active === 0 &&
                                <button className="inline-block p-4 rounded-t-lg" onClick={handleClick} id={0}>
                                    <svg className="h-4 w-4 svg-icon" viewBox="0 0 20 20">
                                        <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
                                    </svg>
                                </button>
                            }
                        </li>
                        <li className="border border-white bg-astudio" style={{ backgroundColor: active === 1 ? '#E1F4F5' : '#C0E3E5' }} role="presentation">
                            <button className="inline-block p-4 rounded-t-lg" onClick={handleClick} id={1}>Tab 2</button>
                            {active === 1 &&
                                <button className="inline-block p-4 rounded-t-lg" onClick={handleClick} id={1}>
                                    <svg className="h-4 w-4 svg-icon" viewBox="0 0 20 20">
                                        <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
                                    </svg>
                                </button>
                            }
                        </li>
                        <li className="flex items-center">
                            <button className="inline-block rounded-t-lg">
                                <svg className='w-10 h-10 fill-zinc-700	' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12H15" stroke="#FDC936" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 9L12 15" stroke="#FDC936" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>

                <div id="myTabContent">
                    {active === 0 &&
                        <div className="p-4 rounded-lg bg-gray-50 " id="profile" role="tabpanel">
                            <div className="max-w-8xl pb-6 px-4 sm:px-6 lg:px-8">
                                <ToolBar pageSize={50} />
                            </div>
                            <div className="max-w sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                                    <Table headers={headers} setHeaders={setHeaders} rows={rows} setRows={setRows} />
                                </div>
                            </div>
                        </div>
                    }
                    {active === 1 &&
                        <div className="p-4 rounded-lg bg-gray-50 " id="dashboard" role="tabpanel">
                            <p className="text-sm text-gray-500 ">This is some placeholder content the <strong className="font-medium text-gray-800 ">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                    }
                </div>


            </AppLayout>
        </viewContext.Provider>

    )
}

export default Dashboard
