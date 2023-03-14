import React from 'react';
import { Page, Text, View, Document, StyleSheet, Svg, Path, Font } from '@react-pdf/renderer';
const borderColor = '#000000'
const Footer = () => {
    const styles = StyleSheet.create({
        footer: {
            fontSize: '14px',
            textAlign: 'center',
            borderTopColor: borderColor,
            borderTopWidth: 1,
            borderBottomColor: borderColor,
            borderBottomWidth: 1,
            bottom: 30,
            left: '25px',
            right: '25px',
            position: 'absolute',
            marginHorizontal: 8,
            paddingVertical: 8,
            fontSize:'11px'
        },
        section: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 8,
            marginVertical: 8
        },
        header: {
            marginTop: '20px'
        }
    });
    return (
        <View fixed style={styles.footer}>
            <Text>
                {`Client's approval: I hereby confirm that I accept the above quotation and that I have read, understood and accept the terms and conditions of ASTUDIO:`}
            </Text>
            <View style={styles.section}>
                <Text>
                    Approved by: ________________
                </Text>
                <Text>
                    Signature: ________________
                </Text>
                <Text>
                    Stamp: ________________
                </Text>
            </View>
            <br />
            <View style={{ textAlign: 'center', paddingVertical: 4 }}>
                <Text>
                    {`Beneficiary: Araman Advertising DMCC, Bank: ADCB, Branch: Karama, Dubai, SWIFT: ADCBAEAA,\nIBAN-AED: AE610030010137826124001, IBAN-GBP: AE110030010137826348001,IBAN-USD: AE430030010137826193001.\nCompany Registration No: JLT6229. Registered Office: Dubai, PO Box. 212803, United Arab Emirates | TRN: 100374728200003`}
                </Text>
            </View>
        </View>
    );
};

export default Footer;