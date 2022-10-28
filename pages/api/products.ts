// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const product = [
  {
    id: 1,
    name: "Wedding Cake",
    desc: {
      th: "Wedding Cake เป็นงานที่หวาน แต่กลับมีรสเผ็ด (เช่นเดียวกับการแต่งงาน) เหมาะสำหรับการสงบสติอารมณ์และออกไปข้างนอกแม้ไม่ได้ทำอะไรเลย",
      en: "Wedding Cake is a sweet strain, of course, but it packs a spicy aftermath (just like marriage). It’s great for calming down and going out, even for doing nothing.",
    },
    image: "http://localhost:3000/images/products/wedding-cake.png",
    thc: "24%",
    cbd: "1%",
    price: 350,
  },
  {
    id: 2,
    name: "Ice Cream Mintz",
    desc: {
      th: "Ice Cream Mintz หรือที่เรียกว่า Ice Cream Mints เป็นสายพันธุ์วัชพืช indica ที่ทำโดยการข้าม Ice Cream Cake และ Kush Mints ผู้วิจารณ์บน Leafly กล่าวว่าความเครียดนี้ทำให้พวกเขารู้สึกหิว หัวเราะคิกคัก และมีความสุข",
      en: "Ice Cream Mintz, also known as Ice Cream Mints,, is a indica weed strain made by crossing Ice Cream Cake and Kush Mints. Reviewers on Leafly say this strain makes them feel hungry, giggly, and happy.",
    },
    image: "http://localhost:3000/images/products/ice-cream-mintz.png",
    thc: "23%",
    cbd: "0.6%",
    price: 300,
  },
  {
    id: 3,
    name: "GG4",
    desc: {
      th: "Original Glue หรือที่รู้จักในชื่อ Gorilla Glue, Original Glue, GG4 และ Gorilla Glue #4 เป็นกัญชาสายพันธุ์ไฮบริดที่มอบความรู้สึกสบายและผ่อนคลายให้กับมือหนักหน่วง ทำให้คุณรู้สึก “ติดกาว” กับโซฟา ดอกตูมที่เคลือบด้วยเรซินเป็นชิ้นๆ ของ Gorilla Glue เติมห้องด้วยกลิ่นดินและเปรี้ยวฉุนที่สืบทอดมาจากสายพันธุ์พ่อแม่",
      en: "Original Glue, also known as Gorilla Glue, Original Glue, GG4, and Gorilla Glue #4 is a potent hybrid marijuana strain that delivers heavy-handed euphoria and relaxation, leaving you feeling “glued” to the couch. Gorilla Glue's chunky, resin-covered buds fill the room with pungent earthy and sour aromas inherited from its parent strains.",
    },
    image: "http://localhost:3000/images/products/gg-4.png",
    thc: "20%",
    cbd: "0%",
    price: 450,
  },
  {
    id: 4,
    name: "Blue Dream",
    desc: {
      th: "บลูดรีมเป็นกัญชาสายพันธุ์ไฮบริดที่มี sativa เด่นโดยผสมบลูเบอร์รี่กับเฮซ สายพันธุ์นี้สร้างความสูงที่สมดุลพร้อมกับผลกระทบเช่นการกระตุ้นสมองและการผ่อนคลายร่างกายทั้งหมด ความฝันสีน้ำเงินคือ 18% THC แต่มีเปอร์เซ็นต์ CBD ต่ำ",
      en: "Blue Dream is a sativa-dominant hybrid marijuana strain made by crossing Blueberry with Haze. This strain produces a balanced high, along with effects such as cerebral stimulation and full-body relaxation. Blue dream is 18% THC but has a low CBD percentage",
    },
    image: "http://localhost:3000/images/products/blue-dream.png",
    thc: "18%",
    cbd: "0%",
    price: 350,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(product);
}
