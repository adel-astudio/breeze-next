import React from 'react';
import { Page, Text, View, Document, StyleSheet, Svg, Path, Font } from '@react-pdf/renderer';

const Info = () => {
    const styles = StyleSheet.create({
        section: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontSize: '14px',
            marginTop: '20px'
        },
        space: {
            marginTop: '20px'
        },
        bold: {
            fontFamily: 'Helvetica-Bold',
            fontWeight: 'bold'
        }
    });

    return (
        <>
            <View name='info' style={styles.section} wrap={false}>
                <View>
                    <Text style={styles.bold}>CONTACT NAME</Text>
                    <br />
                    <Text>Dummy</Text>
                </View>
                <View>
                    <Text style={styles.bold}>  CONTACT EMAIL </Text>
                    <br />
                    <Text>Dummy</Text>
                </View>
                <View>
                    <Text style={styles.bold}> COMPANY NAME </Text>
                    <br />
                    <Text>Dummy</Text>
                </View>
                <View>
                    <Text style={styles.bold}> DATE </Text>
                    <br />
                    <Text>Dummy</Text>
                </View>
                <View>
                    <Text style={styles.bold} > QUOTE NO:</Text>
                    <br />
                    <Text>Dummy</Text>
                </View>
            </View>
            <br />
            <View name='project-title' style={styles.space}>
                <Text style={{ fontSize: '14px', ...styles.bold }}>PROJECT TITLE</Text>
                <br />
                <Text style={{ fontSize: '14px' }}>Dummy</Text>
            </View>
            <br />
            <View name='project-deliverables' style={styles.space}>
                <Text style={{ fontSize: '14px', ...styles.bold }}>PROJECT DELIVERABLES </Text>
                <br />
                <Text style={{ fontSize: '14px' }}>
                    Tempor nostrud veniam quis eiusmod do elit aute reprehenderit. Cupidatat mollit nisi sit et ullamco eiusmod ipsum ullamco ea commodo. Commodo Lorem aute laborum ut pariatur proident. Veniam laboris laborum consequat aliquip. Voluptate esse laborum consectetur veniam culpa magna adipisicing pariatur duis fugiat est.
                </Text>
            </View>
        </>
    );
};

export default Info;