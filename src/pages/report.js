import Footer from '@/components/PDF/Footer';
import Header from '@/components/PDF/Header';
import Info from '@/components/PDF/Info';
import Table from '@/components/PDF/Table';
import React, { useEffect, useState, useRef } from 'react';
import REPORT_DATA from '../../public/REPORT_DATA.json';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
const report = () => {
    const contentArea = useRef(null);
    const [data, setData] = useState([]);
    const totalAmount = REPORT_DATA.reduce((Acc, current) => Acc + current.amount, 0);
    useEffect(() => {
        setData(REPORT_DATA);
    }, [])

    const handleExportWithFunction = () => {
        savePDF(contentArea.current, { paperSize: "TABLOID", scale: 0.75, pageTemplate: Footer });
    }

    return (
        <>
            <PDFExport pageTemplate={Footer}>
                <div className="flex justify-center h-10 p-2 m-2">
                    <button className='bg-astudio text-center w-48 h-24 active:bg-blue-200'
                        onClick={handleExportWithFunction}>
                        Export PDF
                    </button>
                </div>
            </PDFExport>
            <div className='p-24 overflow-hidden' ref={contentArea} id='pdf'>
                {/* <div className='absolute -z-50 bg-astudio h-[200vh] w-96 -top-96 right-20 rotate-[-15deg]'>
                </div> */}
                <Header />
                <br />
                <Info />
                <br />
                <Table data={data} totalAmount={totalAmount} />
            </div>
            <Footer />
        </>

    );
};

export default report;