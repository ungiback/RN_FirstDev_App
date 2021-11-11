import React, { useState, useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Text = styled.Text`
    font-size:20px;
    padding-right:10px;
`
const Country = ({ country }) => {
    const [data, setData] = useState(true)
    const { cur_nm, deal_bas_r } = country;
    useEffect(() => {
        if (cur_nm.split(" ").length < 2) {
            setData(false)
        }
    }, [])
    return (
        data ? (
            <View style={{ flexDirection: 'row', width: '80%', borderBottomWidth: 3, alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, alignItems: 'flex-start', paddingLeft:7, }}>
                    <Text>{cur_nm.split(" ")[0]}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text>{deal_bas_r}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <Text>{cur_nm.split(" ")[1]}</Text>
                </View>
            </View>
        ) : null
    )
}

export default Country;