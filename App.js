import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { View, Text } from 'react-native';

// นําเข้าหน้าจอต่างๆ

import HomeScreen from './screens/HomeScreen';
import LessonListScreen from './screens/LessonListScreen';
import LessonDetailScreen from './screens/LessonDetailScreen';

// กําหนดให้ SplashScreen แสดงจนกว่าแอปจะพร้อม
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {
const [appIsReady, setAppIsReady] = useState(false);

useEffect(() => {
// ฟ�งก์ชันในการโหลดทรัพยากรที่จําเป�นก่อนเริ่มแอป
async function prepare() {
try {
// จําลองการโหลดฟอนต์หรือทรัพยากรอื่นๆ
await new Promise(resolve => setTimeout(resolve, 2000));
} catch (e) {
console.warn(e);
} finally {
// เมื่อโหลดเสร็จแล้ว ให้กําหนดว่าแอปพร้อมใช้งาน
setAppIsReady(true);
}
}

prepare();
}, []);

useEffect(() => {

// ซ่อน SplashScreen เมื่อแอปพร้อมใช้งาน
async function hideSplash() {
if (appIsReady) {
await SplashScreen.hideAsync();
}
}

hideSplash();
}, [appIsReady]);

if (!appIsReady) {
return null;
}

return (
<NavigationContainer>
<StatusBar style="light" backgroundColor="#5e72e4" />
<Stack.Navigator
initialRouteName="Home"
screenOptions={{
headerStyle: {
backgroundColor: '#5e72e4',
},
headerTintColor: '#fff',
headerTitleStyle: {
fontWeight: 'bold',
},
}}
>
<Stack.Screen

name="Home"
component={HomeScreen}
options={{ title: 'หน้าแรก' }}
/>
<Stack.Screen
name="LessonList"
component={LessonListScreen}
options={{ title: 'บทเรียนทั้งหมด' }}
/>
<Stack.Screen
name="LessonDetail"
component={LessonDetailScreen}
options={({ route }) => ({ title: route.params.title })}
/>
</Stack.Navigator>
</NavigationContainer>
);
}