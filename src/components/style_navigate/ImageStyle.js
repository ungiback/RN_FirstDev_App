import React, { useContext, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

const ImageStyle = ({ onRandom, onRadius }) => {
    const theme = useContext(ThemeContext)
    const [currentValue, setCurrentValue] = useState(1)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.background }}>
            <View style={{ width: '100%', flexDirection: 'row', margin: 10, alignItems: 'center', }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20, paddingLeft: 10, paddingRight: 10, textAlign: 'center' }}>사진선택:</Text>
                </View>
                <View style={{ flex: 2, alignItems: 'flex-start' }}>
                    <Pressable onPress={() => { onRandom(currentValue) }}>
                        <Text style={{ fontSize: 20, paddingLeft: 10, paddingRight: 10, textAlign: 'center' }}>랜덤</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', margin: 10, }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20, paddingLeft: 10, paddingRight: 10, textAlign: 'center' }}>테두리:</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Slider
                        style={{ height: 30, width: 200, maginTop: 15, }}
                        step={1}
                        minimumValue={1}
                        maximumValue={10}
                        onValueChange={(v) => { onRadius(v), setCurrentValue(v) }}
                        thumbTintColor={theme.pointColor}
                        maximumTrackTintColor={theme.iconColorFalse}
                        minimumTrackTintColor={theme.iconColorTrue}
                    />
                </View>
            </View>
        </View>
    )
}

ImageStyle.propTypes = {
    onSize: PropTypes.func,
    onColor: PropTypes.func,
    onLocal: PropTypes.func,
}

export default ImageStyle;