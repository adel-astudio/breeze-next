import React from 'react';

const Footer = () => {
    return (
        <footer name="footer" className='border-y border-black bottom-0 mt-24'>
            <div className='text-center my-6'>
                Client's approval:
                <br />
                I hereby confirm that I accept the above quotation and that I have read, understood and accept the terms and conditions of ASTUDIO:
            </div>
            <div className='flex justify-around mb-4'>
                <div>
                    Approved by: ________________
                </div>
                <div>
                    Signature: ________________
                </div>
                <div>
                    Stamp: ________________
                </div>
            </div>
            <br />
            <div className='text-center mb-6'>
                <div>
                    Beneficiary: Araman Advertising DMCC, Bank: ADCB, Branch: Karama, Dubai, SWIFT: ADCBAEAA,
                </div>
                <br />
                <div>
                    IBAN-AED: AE610030010137826124001, IBAN-GBP: AE110030010137826348001, IBAN-USD: AE430030010137826193001.
                </div>
                <br />
                <div>
                    Company Registration No: JLT6229. Registered Office: Dubai, PO Box. 212803, United Arab Emirates | TRN: 100374728200003
                </div>
            </div>
        </footer>
    );
};

export default Footer;