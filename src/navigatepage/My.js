import React, { useCallback, useContext, useEffect, useState } from "react";
import { View, Text, Image, useWindowDimensions, TouchableOpacity } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NameStyle from "../components/style_navigate/NameStyle";
import ImageStyle from "../components/style_navigate/ImageStyle";
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';

const My = () => {
    const { width } = useWindowDimensions();
    const Tab = createMaterialTopTabNavigator();
    const theme = useContext(ThemeContext)
    const [namestyles, setNamestyles] = useState({
        fontSize: 20,
        color: theme.textColor,
        content: 'center'
    })
    const [imagestyles, setImagestyle] = useState({
        src: '',
        radius_value: 10,

    })

    const reload = useCallback((v) => {
        const random = ["cat", "dog", "space", "coffee", "sky",]
        setImagestyle({ ...imagestyles, src: `https://imgsrc.space/${random[Math.floor(Math.random() * random.length)]}`, radius_value: (10 * v) })
    }, [])

    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 2, backgroundColor: theme.background }}>
                <View style={{ flexDirection: 'row', width: width - 20, height: 200, backgroundColor: theme.boxBacground }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{ flex: 2, margin: 5, justifyContent: 'center', alignItems: 'center' }}>
                            {imagestyles.src === '' ?
                                <Ionicons name="person-outline" size={50} color={theme.iconColorFalse} />
                                :
                                <Image style={{ flex: 1, width: '100%', height: '100%', borderRadius: imagestyles.radius_value }} source={{ uri: imagestyles.src }} />
                            }
                        </TouchableOpacity>

                        <View style={{ justifyContent: 'center', alignItems: namestyles.content, }}>
                            <Text style={{ fontSize: namestyles.fontSize, color: namestyles.color }}>이름</Text>
                        </View>

                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20 }}>설명</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Tab.Navigator initialRouteName={ImageStyle}
                    screenOptions={{
                        tabBarStyle: { backgroundColor: theme.tabBarbackgound, },
                        tabBarActiveTintColor: theme.iconColorTrue,
                        tabBarInactiveTintColor: theme.iconColorFalse,
                        swipeEnabled: false,
                        tabBarIndicatorStyle: { backgroundColor: theme.pointColor },
                        tabBarLabelStyle: { fontSize: 15 }
                    }}>
                    <Tab.Screen name="이미지">
                        {() => <ImageStyle
                            onRandom={(v) => reload(v)}
                            onRadius={(value) => setImagestyle({ ...imagestyles, radius_value: (10 * value) })}
                        />}
                    </Tab.Screen>
                    <Tab.Screen name="이름">
                        {() => <NameStyle
                            onSize={(size) => setNamestyles({ ...namestyles, fontSize: (20 * size) })}
                            onColor={(color_) => setNamestyles({ ...namestyles, color: color_ })}
                            onLocal={(content) => setNamestyles({ ...namestyles, content: content })}
                        />}
                    </Tab.Screen>
                </Tab.Navigator>
            </View>
        </SafeAreaProvider >
    )
}

export default My;

