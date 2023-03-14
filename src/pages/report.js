import Footer from '@/components/PDF/Footer';
import Header from '@/components/PDF/Header';
import Info from '@/components/PDF/Info';
import Table from '@/components/PDF/Table';
import React, { useEffect, useState, useRef } from 'react';
import { reportData } from '../../public/REPORT_DATA.js';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer/lib/react-pdf.browser.cjs.js';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer/lib/react-pdf.browser.cjs.js';
import font from "../../public/assets/font.ttf"
import lightfont from "../../public/assets/lightFont.ttf"



const MyDoc = () => {
    const [data, setData] = useState([]);
    const totalAmount = reportData.reduce((Acc, current) => Acc + current.amount, 0);
    Font.register({
        family: 'Neutra Text',
        format: "truetype",
        fonts: [
            {
                src: lightfont,
            },
            {
                src: font,
                fontWeight: 'bold',
              },
        ],
    });
    useEffect(() => {
        setData(reportData);
    }, [])
    return <Document>
        <Page size="TABLOID" style={{ padding: '25px', paddingBottom: 180, fontSize: '12px', fontFamily: 'Neutra Text' }}>
            <Image fixed src="/assets/bg.jpg" style={{ position: 'absolute', minWidth: '110%', minHeight: '110%', display: 'block', height: '110%', width: '110%' }} />
            <Header />
            <Info />
            <Table data={data} totalAmount={totalAmount} />
            <Footer />
        </Page>
    </Document>
}

const report = () => {
    console.log(Font.getRegisteredFontFamilies(), Font.getRegisteredFonts());

    return (
        <>
            <div className='flex justify-center h-screen items-center bg-astudio'>
                <PDFDownloadLink className='bg-astudio-yellow p-6 rounded border border-black' document={<MyDoc />} fileName="quote.pdf">
                    {({ blob, url, loading, error }) =>
                        loading ? 'Loading document...' : 'Download PDF!'
                    }
                </PDFDownloadLink>
            </div>

        </>

    );
};

export default report;