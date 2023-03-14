import React, { Fragment } from 'react';
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';

const borderColor = '#000000'
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomColor: borderColor,
        borderBottomWidth: 1,
        alignItems: 'center',
        fontSize: '14px',
        paddingBottom: '10px',
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomColor: borderColor,
        borderBottomWidth: 1,
        alignItems: 'center',
        fontSize: '14px',
        backgroundColor: '#ffffff'
    },
    description: {
        width: '60%',
        height: '100%',
        textAlign: 'left',
        padding: 8
    },
    qty: {
        width: '10%',
        height: '100%',
        textAlign: 'right',
        padding: 8,
    },
    rate: {
        width: '15%',
        height: '100%',
        textAlign: 'right',
        padding: 8,
    },
    amount: {
        width: '15%',
        height: '100%',
        textAlign: 'right',
        padding: 8,
    },
    space: {
        marginTop: '20px'
    },
    bold: {
        fontWeight: 'bold'
    }
});


const TableRows = ({ items }) => {
    const rows = items.map((item, index) =>
        <View style={styles.row} key={index}>
            <Text wrap={false} style={styles.description}>{item.description}</Text>
            <Text style={styles.qty}>{item.units}</Text>
            <Text style={styles.rate}>{item.price}</Text>
            <Text style={styles.amount}>{item.amount}</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment>)
};

const Table = ({ data, totalAmount }) => {
    return (
        <View style={styles.space}>
            <View style={styles.header}>
                <Text style={styles.description}>DESCRIPTION</Text>
                <Text style={styles.qty}>UNITS</Text>
                <Text style={styles.rate}>UNIT PRICE</Text>
                <Text style={styles.amount}>AMOUNT AED</Text>
            </View>
            <TableRows items={data} />
            <View style={styles.row}>
                <Text style={styles.description}></Text>
                <Text style={styles.qty}></Text>
                <Text style={{ ...styles.rate, ...styles.bold }}>TOTAL AED</Text>
                <Text style={{ ...styles.amount, ...styles.bold }}>{totalAmount}</Text>
            </View>
        </View>
    );
};

export default Table;