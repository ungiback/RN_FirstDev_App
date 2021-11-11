import React, { useContext, useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import Slider from '@react-native-community/slider'
import { Colors } from '../../Colors';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

const NameStyle = ({ onSize, onColor, onLocal }) => {
    const form = {
        "왼쪽": "flex-start",
        "가운데": "center",
        "오른쪽": "flex-end",
    }
    const theme = useContext(ThemeContext)
    return (
        <View style={{ flex: 1, alignItems: 'center', width: '100%', backgroundColor: theme.background }}>
            <View style={{ width: '100%', flexDirection: 'row', margin: 10, }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20, paddingLeft: 10, paddingRight: 10, textAlign: 'center' }}>크기:</Text>
                </View>
                <View style={{ flex: 3 }}>
                    <Slider
                        style={{ height: 30, width: 200, maginTop: 15, }}
                        step={0.5}
                        minimumValue={1}
                        maximumValue={5}
                        onValueChange={(va) => onSize(va)}
                        thumbTintColor={theme.pointColor}
                        maximumTrackTintColor={theme.iconColorFalse}
                        minimumTrackTintColor={theme.iconColorTrue}
                    />
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', margin: 10, alignItems: 'center', }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20, paddingLeft: 10, paddingRight: 10, textAlign: 'center' }}>정렬:</Text>
                </View>
                <View style={{ flex: 3, flexDirection: 'row' }}>
                    {Object.entries(form).map((b, index) => <Pressable key={index} style={{ paddingRight: 19 }} onPress={() => onLocal(b[1])} >
                        <Text style={{ fontSize: 20 }}>{b[0]}</Text>
                    </Pressable>)}
                </View>
            </View>
            <ScrollView style={{ width: '100%' }} horizontal={true}>
                {Colors.map((color, index) => <Pressable key={index} style={{ width: 40, height: 40, backgroundColor: color }} onPress={() => onColor(color)} />)}
            </ScrollView>
        </View>
    )
}

NameStyle.propTypes = {
    onSize: PropTypes.func,
    onColor: PropTypes.func,
    onLocal: PropTypes.func,
}

export default NameStyle;

