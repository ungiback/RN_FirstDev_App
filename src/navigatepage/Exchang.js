
import React, { useContext, useEffect, useState, useMemo } from 'react';
import { StyleSheet, Text, View, TextInput, useWindowDimensions, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { ACCESS_KEY } from "@env"
import { currency } from '../Currency';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from 'styled-components';
import { useIsFocused } from '@react-navigation/core';


const Exchange = () => {
    const [text, setText] = useState();
    const [result, setResult] = useState((0).toFixed(2))
    const { width } = useWindowDimensions()
    const [rates, setRates] = useState(currency);
    const [selectedcurrency, setSelectedcurrency] = useState({
        from: rates.EUR,
        to: rates.KRW,
    });
    const isFocused = useIsFocused();
    const endpoint = 'latest'
    useEffect(async () => {
        // const { data } = await axios.get(`http://api.exchangeratesapi.io/v1/${endpoint}?access_key=${ACCESS_KEY}`)
        // setRates(data.rates)
    }, [])

    useEffect(() => {
        setText()
        setResult((0).toFixed(2))
    }, [selectedcurrency, isFocused])

    const today = new Date()
    const realtimeChange = (text) => {
        if (text === "") {
            setResult((0).toFixed(2))
        } else {
            setResult((parseInt(text) * selectedcurrency.to).toFixed(2))
        }
        setText(text)
    }
    const theme = useContext(ThemeContext)
    return (
        <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, paddingBottom: 10, color: theme.textColor }}>
                        {/* {`Today: ${today.toISOString().split("T")[0]}`} */}
                        Calculator
                        </Text>
                    <View style={{ width: width - 30, paddingBottom: 40 }}>
                        <Picker
                            selectedValue={selectedcurrency.from}
                            style={{ height: 40, width: 150, color: theme.textColor }}
                            onValueChange={(itemValue) => setSelectedcurrency({ ...selectedcurrency, from: itemValue })}>
                            <Picker.Item label="EUR" value={rates.EUR} />
                            {/* {Object.entries(rates).map((rate, itemindex) => <Picker.Item key={itemindex} label={rate[0]} value={rate[1]} />)}
                    나중에 base가 될 값 */}
                        </Picker>
                        <TextInput style={{ ...styles.Input_s, backgroundColor: theme.boxBacground }}
                            placeholder="입력하시요"
                            value={text}
                            onChangeText={realtimeChange}
                            keyboardType="number-pad" />
                    </View>
                    <AntDesign name="arrowdown" size={24} color={theme.textColor} />
                    <View style={{ width: width - 30, paddingTop: 50, }}>
                        <Picker
                            selectedValue={selectedcurrency.to}
                            style={{ height: 40, width: 150, color: theme.textColor }}
                            onValueChange={(itemValue) => setSelectedcurrency({ ...selectedcurrency, to: itemValue })}>
                            {Object.entries(rates).map((rate, itemindex) => <Picker.Item key={itemindex} label={rate[0]} value={rate[1]} />)}
                        </Picker>
                        <Text style={{ ...styles.result_tet, backgroundColor: theme.boxBacground }}>{result}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    Input_s: {
        fontSize: 20,
        borderRadius: 10,
        height: 60,
        padding: 10
    },
    result_tet: {
        height: 60,
        fontSize: 20,
        borderRadius: 10,
        textAlignVertical: 'center',
        padding: 10,
    }
});
export default Exchange;