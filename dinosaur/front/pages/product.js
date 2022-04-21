import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'

const Procdutes = ({ token }) => {

    // const [user, setUser] = useState({})

    // useEffect(() => {
    //     fooUser()
    // }, [])

    // const fooUser = async () => {
    //     try {
            
    //         const users = await axios.get(`${config.URL}/foo`, {
    //             headers: { Authorization: `Bearer ${token}` }
    //         })
           
    //         setUser(users.data)
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }

    // }

    return (
        
        <Layout>
            <Head>
            
                <title>Bootstrap Example</title>

            </Head>
            <Navbar />
            <div>
            <div className={styles.list}>
            <Col className="col-lg-12 col-12">
                
               
                <h1>ร้านขายของเล่น ไดโนเสาร์</h1>
                <h4>พบกับไดโนเสาร์จากภาพยนตร์ยอดฮิต Jurassic World: Fallen Kingdom
                ชวนทุกคนรู้จัก 13 ไดโนเสาร์สายพันธุ์ที่ปรากฏตัวให้เราได้ตื่นตาตื่นใจกันในตัวอย่างเต็มของภาพยนตร์ 
                ประกอบไปด้วยสมาชิกจากหน้าเก่าหน้าใหม่ที่จะมาสรรค์สร้างให้การผจญภัยในโลกจูราสสิคกับ
                อาณาจักรที่กำลังจะล่มสลายเข้มข้นมากยิ่งขึ้น ถ้าพร้อมแล้วก็ไปพบกับพวกเขาได้เลย
                </h4>

                <div style={{margin: '10px'}}>    <img src="https://img.kapook.com/u/2018/pailin_p/994Movies/Apatosaurus.jpg"        
                width={700}
                height={400}></img>
                <h1>อะแพโทซอรัส (Apatosaurus)</h1>                
                <h4>อย่างที่รู้กันดีว่า อะแพโทซอรัส เป็นไดโนเสาร์สายพันธุ์กินพืชที่ไร้ซึ่งความดุร้ายและอันตรายใด ๆ
                     แต่จากเหตุภูเขาไฟระเบิดที่ทำให้ทุกคนต้องวิ่งหนีหัวซุกหัวซุน ก็อาจทำให้สัตว์ยุคหินขนาดใหญ่
                     เท่ารถโรงเรียน 2 คัน น้ำหนัก 35 ตันเทียบเท่าช้างแอฟริกัน 4 ตัวพลาดไปเหยียบสิ่งมีชีวิตอื่น
                     ให้แหลกคาที่ได้ </h4></div>

                <div style={{margin: '10px'}}>    <img src="https://img.kapook.com/u/2018/pailin_p/994Movies/Triceratops.jpg"        
                width={700}
                height={400}></img>
                <h1>ไทรเซอราท็อปส์ (Triceratops)</h1>                
                <h4>ไดโนเสาร์สามเขาที่แม้จะเป็นสายพันธุ์กินพืชไม่ดุร้าย แต่เมื่อมีถัยอันตรายมันก็พร้อมที่จะพุ่งชน
                    ด้วยน้ำหนักตัวขนาด 10 ตัน ต่อสู้ด้วยสองเขาบนศีรษะและหนึ่งนอบนจมูกอย่างไม่ลังเล 
                    ไทรเซอราท็อปส์ สามารถวิ่งด้วยความเร็ว 35 ไมล์/ชั่วโมง และเป็นไดโนเสาร์ขวัญใจแฟน ๆ 
                    มาตั้งแต่ Jurassic Park </h4></div>

                <div style={{margin: '10px'}}>    <img src="https://img.kapook.com/u/2018/pailin_p/994Movies/Stegosaurus.jpg"        
                width={700}
                height={400}></img>
                <h1>สเตโกซอรัส (Stegosaurus)</h1>                
                <h4>ไดโนเสาร์สายตั้งรับหนัก 5 ตันขนาดลำตัว 30 ฟุต นอกเหนือจากมีนิสัยอยู่รวมกันเป็นกลุ่มใหญ่
                    เพื่อป้องกันภัยซึ่งกันและกัน สเตโกซอรัส นั้นมีแผงเกล็ดจำนวน 17 ชิ้นเรียงราย
                    ตั้งแต่ลำคอไปจนถึงบั้นท้าย พร้อมด้วยหนามแหลมบริเวณหางเอาไว้ใช้ข่มขู่ป้องกันตัวเพื่อทดแทน
                    ความเชื่องช้าที่ถือเป็นอ่อนที่สุดของมัน</h4></div>

                <div style={{margin: '10px'}}>    <img src="https://img.kapook.com/u/2018/pailin_p/994Movies/TyrannosaurusRex.jpg"        
                width={700}
                height={400}></img>
                <h1>ไทแรนโนซอรัส เร็กซ์ (Tyrannosaurus Rex)</h1>                
                <h4>ราชาแห่งไดโนเสาร์พันธุ์ดุร้ายที่ทำให้คนดูตื่นเต้นทุกครั้งที่ร่างขนาด 9 ตัน ยาวขนาด 40 ฟุตของมัน
                    ปรากฏตัวออกมาอย่างน่าเกรงขาม แต่ในโลกจูราสสิค ไดโนเสาร์ทีเร็กซ์ หรือ เจ้าเร็กซี่ 
                    กลับเป็นฮีโร่ที่หลายคนสันนิษฐานว่ามันอาจสละชีวิตของตัวเองต่อสู้กับไดโนเสาร์ตัวอื่น
                    เพื่อปกป้องพระเอก โอเวน เกรดี ใน Fallen Kingdom</h4></div>

                     <div style={{margin: '10px'}}>    <img src="https://img.kapook.com/u/2018/pailin_p/994Movies/Velociraptor.jpg"        
                width={700}
                height={400}></img>
                <h1>เวโลซีแรปเตอร์ (Velociraptor)</h1>                
                <h4> ตัวต้นเหตุเรื่องวุ่นวายอยู่ในโลกจูราสสิคมาทุกยุคทุกสมัย ไดโนเสาร์นักล่าขนาดตัวเท่ามนุษย์ที่พร้อมโจมตี
                    แบบไม่สนใจเลยว่าศัตรูของมันมีขนาดเล็กใหญ่แค่ไหน ทั้งความเร็วในการวิ่งก็ไม่เป็นสองรองใคร 
                    แถมยังฉลาดหลักแหลมจนขึ้นชื่อว่าเป็นนักฆ่าที่น่าเกรงขามอันดับต้น ๆ เลยทีเดียว
                    ใน Jurassic World เวโลซีแรปเตอร์แท็กทีมกันมา 4 ตัวในฉากฝึกไดโนเสาร์อันเลื่องลือของ
                     โอเวน เกรดี สลัดคราบนักล่าน่าเกรงขามมาเป็นขวัญใจแฟน ๆ แต่ใน Fallen Kingdom 
                     ดูท่าว่าทุกคนต้องลุ้นระทึกกันสักหน่อย เพราะหัวหน้าแก๊ง เจ้าบลู คู่ซี้พระเอกของเรา 
                     กลับถูกจับไปทดลองอะไรบางอย่างที่เปลี่ยนมันให้กลายเป็นสัตว์ดุร้ายแบบที่ไม่เคยเป็นมาก่อน</h4></div>

            </Col>
            
            </div>
            </div>
        </Layout>
    )
}

// export default withAuth(Foo1)
export default withAuth(Procdutes)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
