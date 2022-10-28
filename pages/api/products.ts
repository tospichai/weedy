// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const product = [
  {
    id: 1,
    name: "Wedding Cake",
    desc: "Wedding Cake is a sweet strain, of course, but it packs a spicy aftermath (just like marriage). It’s great for calming down and going out, even for doing nothing",
    image: "http://localhost:3000/images/products/wedding-cake.png",
    thc: "24%",
    cbd: "1%",
    price: 350,
  },
  {
    id: 2,
    name: "Ice Cream Mintz",
    desc: "Ice Cream Mintz, also known as Ice Cream Mints,, is a indica weed strain made by crossing Ice Cream Cake and Kush Mints. Reviewers on Leafly say this strain makes them feel hungry, giggly, and happy.",
    image: "http://localhost:3000/images/products/ice-cream-mintz.png",
    thc: "23%",
    cbd: "0.6%",
    price: 300,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(product);
}
