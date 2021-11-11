import { useFocusEffect, useIsFocused } from "@react-navigation/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import axios from "axios";
import { AUTHKEY } from "@env"
import Country from "../components/Country ";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

const Variety = () => {
    const [arr, setArr] = useState([])
    const [load, setLoad] = useState(false)
    useFocusEffect(
        useCallback(() => {
            console.log("호출")
            async function db() {
                const { data } = await axios.get(`https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${AUTHKEY}&searchdate=20211109&data=AP01`)
                setArr(data)
                { data ? setLoad(true) : null }
            }
            db()
        }, [])
    )
    const insents = useSafeAreaInsets()
    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: '#dfddc7' }}>
            <View style={{ flex: 1, alignItems: 'center', paddingTop: insents.top, justifyContent: 'center', borderBottomWidth: 6, }}>
                <Text style={{ fontSize: 40 }}>1원당</Text>
                <Text style={{ fontSize: 27 }}>오늘</Text>
            </View>
            <View style={{ flex: 7, justifyContent: 'center', alignItems: 'center' }}>
                <ScrollView style={{ flex: 1 }}>
                    {load ? arr.map((m, index) => <Country key={index} country={m} />) : null}
                </ScrollView>
            </View>
        </SafeAreaProvider>
    )
}

export default Variety;