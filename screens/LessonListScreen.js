import React from 'react';

import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

// ข้อมูลบทเรียนจําลอง
const lessonData = [
{
id: '1',
title: 'พื้นฐานภาษาไทย',
description: 'เรียนรู้พื้นฐานของภาษาไทย การออกเสียง และโครงสร้างประโยค',

image: require('../assets/lesson1.png'),
duration: '30 นาที',
level: 'เริ่มต้น',
content: `# พื้นฐานภาษาไทย
ภาษาไทยเป�นภาษาที่มีเอกลักษณ์เฉพาะตัว มีระบบเสียงและระบบการเขียนที่ซับซ้อน

## การออกเสียงพื้นฐาน
ภาษาไทยเป�นภาษาที่มีเสียงวรรณยุกต์ 5 เสียง ได้แก่
- เสียงสามัญ
- เสียงเอก
- เสียงโท
- เสียงตรี
- เสียงจัตวา

## ตัวอย่างคําศัพท์พื้นฐาน
- สวัสดี (sa-wat-dee) - สวัสดี
- ขอบคุณ (khop-khun) - ขอบคุณ
- ใช่ (chai) - ใช่
- ไม่ (mai) - ไม่
## โครงสร้างประโยคพื้นฐาน
โครงสร้างประโยคพื้นฐานในภาษาไทยคือ ประธาน + กริยา + กรรม เช่น
"ฉันกินข้าว" (chan kin khao) - ฉัน (ประธาน) + กิน (กริยา) + ข้าว (กรรม)`
},
{
id: '2',

title: 'การเขียนภาษาไทย',
description: 'เรียนรู้การเขียนพยัญชนะ สระ และวรรณยุกต์ภาษาไทย',
image: require('../assets/lesson2.png'),
duration: '45 นาที',
level: 'ปานกลาง',
content: `# การเขียนภาษาไทย

ภาษาไทยมีพยัญชนะ 44 ตัว สระ 32 รูป และวรรณยุกต์ 4 รูป

## พยัญชนะไทย

พยัญชนะไทยแบ่งเป�น 3 กลุ่มตามเสียง:
- อักษรสูง (High class): ข ฉ ถ ฐ ผ ฝ ศ ษ ส ห
- อักษรกลาง (Middle class): ก จ ฎ ฏ ด ต บ ป อ
- อักษรต่ํา (Low class): ค ฆ ช ซ ฌ ญ ฑ ฒ ณ ท ธ น พ ฟ ภ ม ย ร ล ว ฬ ฮ

## สระไทย

สระในภาษาไทยมีทั้งสระเดี่ยวและสระประสม เช่น:
- สระเดี่ยว: -ะ -า -ิ-ี-ึ-ื-ุ -ู เ- แ- โ- ใ- ไ-
- สระประสม: เ-ะ แ-ะ โ-ะ เ-าะ เ-ียะ เ-ือะ -ัวะ

## การผสมคํา

การผสมคําในภาษาไทยจะเป�นการนําพยัญชนะมาผสมกับสระและวรรณยุกต์ เช่น:
- กา = ก + า
- ป�ด = ป + ิ + ด
- เสือ = ส + เ-ือ`
},
{

id: '3',
title: 'การสนทนาพื้นฐาน',
description: 'เรียนรู้บทสนทนาพื้นฐานภาษาไทยในชีวิตประจําวัน',
image: require('../assets/lesson3.png'),
duration: '40 นาที',
level: 'เริ่มต้น',
content: `# การสนทนาพื้นฐานภาษาไทย
บทเรียนนี้จะแนะนําบทสนทนาพื้นฐานที่ใช้ในชีวิตประจําวัน

## การทักทาย

- สวัสดีครับ/ค่ะ (sa-wat-dee khrap/kha) - สวัสดี
- สบายดีไหมครับ/คะ (sa-bai-dee mai khrap/kha) - สบายดีไหม
- สบายดีครับ/ค่ะ (sa-bai-dee khrap/kha) - สบายดี
- ไปแล้วนะครับ/คะ (pai laew na khrap/kha) - ลาก่อน

## การแนะนําตัว

- ผม/ดิฉันชื่อ... (phom/di-chan chue...) - ฉันชื่อ...
- ยินดีที่ได้รู้จักครับ/ค่ะ (yin-dee tee dai roo-jak khrap/kha) - ยินดีที่ได้รู้จัก
## การสั่งอาหาร

- ขอเมนูหน่อยครับ/ค่ะ (khor me-nu noi khrap/kha) - ขอเมนูหน่อย
- ผม/ดิฉันจะสั่ง... (phom/di-chan ja sang...) - ฉันจะสั่ง...
- เผ็ดน้อย/เผ็ดมาก (phet noi/phet mak) - เผ็ดน้อย/เผ็ดมาก`
},
{
id: '4',

title: 'วัฒนธรรมไทย',
description: 'เรียนรู้วัฒนธรรม ประเพณี และมารยาทไทย',
image: require('../assets/lesson4.png'),
duration: '60 นาที',
level: 'ปานกลาง',
content: `# วัฒนธรรมไทย

ประเทศไทยมีวัฒนธรรมที่เป�นเอกลักษณ์และมีประวัติศาสตร์อันยาวนาน

## การไหว้

การไหว้เป�นวัฒนธรรมการทักทายแบบไทย แบ่งเป�น 3 ระดับ:
- ไหว้พระ: ยกมือสูงระดับหน้าผาก
- ไหว้ผู้ใหญ่: ยกมือสูงระดับจมูก
- ไหว้บุคคลทั่วไป: ยกมือสูงระดับอก

## เทศกาลสําคัญ
- สงกรานต์: วันขึ้นป�ใหม่ไทย (13-15 เมษายน)
- ลอยกระทง: เทศกาลแห่งแสงและน้ํา (วันเพ็ญเดือน 12)
- วันมาฆบูชา: วันสําคัญทางพุทธศาสนา
## มารยาทไทย

- ถอดรองเท้าก่อนเข้าบ้าน
- ไม่ชี้ด้วยนิ้วเท้า
- ไม่แตะต้องศีรษะของผู้อื่น
- แต่งกายสุภาพเมื่อเข้าวัดหรือสถานที่สําคัญ`
},
{

id: '5',
title: 'ไวยากรณ์ไทยขั้นสูง',
description: 'เรียนรู้ไวยากรณ์ไทยขั้นสูงสําหรับการสื่อสารที่ซับซ้อน',
image: require('../assets/lesson5.png'),
duration: '90 นาที',
level: 'สูง',
content: `# ไวยากรณ์ไทยขั้นสูง
บทเรียนนี้ครอบคลุมไวยากรณ์ไทยขั้นสูงสําหรับการสื่อสารที่ซับซ้อนมากขึ้น

## คําลักษณะนาม

ภาษาไทยมีคําลักษณะนามที่หลากหลาย เช่น:
- คน - สําหรับบุคคล (เช่น คนละ 1 ชิ้น)
- ตัว - สําหรับสัตว์และเสื้อผ้า (เช่น แมว 2 ตัว)
- เล่ม - สําหรับหนังสือ (เช่น หนังสือ 3 เล่ม)

## การใช้คําเชื่อม

- และ, กับ, รวมทั้ง - ใช้เชื่อมคําหรือประโยคที่มีความหมายเสริมกัน
- แต่, อย่างไรก็ตาม - ใช้เชื่อมประโยคที่มีความหมายขัดแย้งกัน
- เพราะ, เนื่องจาก - ใช้แสดงเหตุผล
## รูปประโยคซับซ้อน
- ประโยคความรวม: เชื่อมประโยคย่อยด้วยคําเชื่อม
- ประโยคความซ้อน: มีประโยคหลักและประโยคย่อย`
},
];

const LessonListScreen = ({ navigation }) => {
const renderLessonItem = ({ item }) => (
<TouchableOpacity
style={styles.lessonCard}
onPress={() => navigation.navigate('LessonDetail', { lessonId: item.id, title: item.title,
content: item.content })}
>
<Image source={item.image} style={styles.lessonImage} resizeMode="cover" />
<View style={styles.lessonContent}>
<Text style={styles.lessonTitle}>{item.title}</Text>
<Text style={styles.lessonDescription}>{item.description}</Text>

<View style={styles.lessonMetaContainer}>
<View style={styles.lessonMeta}>
<Ionicons name="time-outline" size={16} color="#8898aa" />
<Text style={styles.lessonMetaText}>{item.duration}</Text>
</View>

<View style={styles.lessonMeta}>
<Ionicons name="bar-chart-outline" size={16} color="#8898aa" />
<Text style={styles.lessonMetaText}>{item.level}</Text>
</View>
</View>
</View>
</TouchableOpacity>
);

return (
<SafeAreaView style={styles.container}>
<Text style={styles.pageTitle}>เลือกบทเรียนที่ต้องการ</Text>

<Text style={styles.pageSubtitle}>เรียนรู้ภาษาไทยในทุกระดับ</Text>

<FlatList
data={lessonData}
renderItem={renderLessonItem}
keyExtractor={item => item.id}
contentContainerStyle={styles.listContainer}
showsVerticalScrollIndicator={false}
/>
</SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f4f5f7',
},
pageTitle: {
fontSize: 24,
fontWeight: 'bold',
color: '#5e72e4',
paddingTop: 20,
paddingHorizontal: 20,
},
pageSubtitle: {
fontSize: 16,
color: '#8898aa',
marginBottom: 20,
paddingHorizontal: 20,

},
listContainer: {
padding: 15,
},
lessonCard: {
backgroundColor: '#fff',
borderRadius: 15,
overflow: 'hidden',
marginBottom: 15,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.1,
shadowRadius: 8,
elevation: 3,
},
lessonImage: {
width: '100%',
height: 150,
},
lessonContent: {
padding: 15,
},
lessonTitle: {
fontSize: 18,
fontWeight: 'bold',
color: '#525f7f',
marginBottom: 8,
},
lessonDescription: {
fontSize: 14,

color: '#8898aa',
marginBottom: 12,
},
lessonMetaContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
},
lessonMeta: {
flexDirection: 'row',
alignItems: 'center',
},
lessonMetaText: {
fontSize: 12,
color: '#8898aa',
marginLeft: 5,
},
});

export default LessonListScreen;