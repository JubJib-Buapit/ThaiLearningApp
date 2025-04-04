import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from
'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
return (
<SafeAreaView style={styles.container}>
<ScrollView contentContainerStyle={styles.scrollContainer}>

<View style={styles.header}>
<Image
source={require('../assets/logo2.png')}
style={styles.logo}
resizeMode="contain"
/>
<Text style={styles.appTitle}>English Learning App</Text>
<Text style={styles.appSubtitle}>เรียนรู้ภาษาอังกฤษออนไลน์</Text>
</View>

<View style={styles.infoContainer}>
<View style={styles.infoCard}>
<Ionicons name="book-outline" size={40} color="#5e72e4" />
<Text style={styles.infoTitle}>10+ บทเรียน</Text>
<Text style={styles.infoDescription}>
บทเรียนหลากหลายรูปแบบ ครอบคลุมทุกทักษะการเรียนรู้
</Text>
</View>

<View style={styles.infoCard}>
<Ionicons name="time-outline" size={40} color="#5e72e4" />
<Text style={styles.infoTitle}>เรียนได้ทุกที่ทุกเวลา</Text>
<Text style={styles.infoDescription}>
ศึกษาบทเรียนได้ตามความต้องการของคุณ
</Text>
</View>

<View style={styles.infoCard}>
<Ionicons name="ribbon-outline" size={40} color="#5e72e4" />
<Text style={styles.infoTitle}>วัดผลการเรียนรู้</Text>

<Text style={styles.infoDescription}>
แบบทดสอบหลังเรียนเพื่อประเมินความเข้าใจ
</Text>
</View>
</View>

<TouchableOpacity
style={styles.button}
onPress={() => navigation.navigate('LessonList')}
>
<Text style={styles.buttonText}>เริ่มเรียนเลย</Text>
<Ionicons name="arrow-forward" size={20} color="#fff" />
</TouchableOpacity>
</ScrollView>
</SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f4f5f7',
},
scrollContainer: {
flexGrow: 1,
paddingBottom: 30,
},
header: {
alignItems: 'center',
padding: 20,

backgroundColor: '#fff',
borderBottomLeftRadius: 30,
borderBottomRightRadius: 30,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.1,
shadowRadius: 10,
elevation: 5,
marginBottom: 20,
},
logo: {
width: 120,
height: 120,
marginBottom: 10,
},
appTitle: {
fontSize: 28,
fontWeight: 'bold',
color: '#5e72e4',
marginBottom: 5,
},
appSubtitle: {
fontSize: 16,
color: '#8898aa',
},
infoContainer: {
paddingHorizontal: 20,
marginBottom: 30,
},
infoCard: {

backgroundColor: '#fff',
borderRadius: 15,
padding: 20,
marginBottom: 15,
alignItems: 'center',
shadowColor: '#000',
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.1,
shadowRadius: 5,
elevation: 2,
},
infoTitle: {
fontSize: 18,
fontWeight: 'bold',
color: '#525f7f',
marginTop: 10,
marginBottom: 5,
},
infoDescription: {
fontSize: 14,
color: '#8898aa',
textAlign: 'center',
},
button: {
backgroundColor: '#5e72e4',
borderRadius: 10,
padding: 15,
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',

marginHorizontal: 20,
shadowColor: '#5e72e4',
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.3,
shadowRadius: 10,
elevation: 6,
},
buttonText: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
marginRight: 10,
},
});

export default HomeScreen;