// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal,UilClipboardAlt } from '@iconscout/react-unicons';
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";


// Analytics Cards Data
export const cardsData = [
  {
    title: "VENTAS",
    color: {
      backGround: "green",
      boxShadow: "0px 10px 20px 0px #000000",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Ventas",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "INGRESOS",
    color: {
      backGround: "blue",
      boxShadow: "0px 10px 20px 0px #000000",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "ingresos",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "GASTOS",
    color: {
      backGround:"red",
      boxShadow: "0px 10px 20px 0px #000000",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "gastos",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];