/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import imgProductErr from '../Assets/Images/userdefault.png';
import axios from 'axios';
import {
  UilUsdSquare,
  UilMoneyWithdrawal,
  UilClipboardAlt,
} from '@iconscout/react-unicons';
// Recent Card Imports
import img1 from '../imgs/img1.png';
import img2 from '../imgs/img2.png';
import img3 from '../imgs/img3.png';

export function setImgError(e, img) {
  if (!img) return;
  e.target.src = img;
}

export function setImgProductErr(e) {
  setImgError(
    e,
    'https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1'
  );
}

export function setImgProductHomeErr(e) {
  setImgError(
    e,
    'https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1'
  );
}

export function setImgUserErr(e) {
  setImgError(e, imgProductErr);
}

export function isLogged() {
  const { isAuthenticated } = useAuth0();

  // prevenir doble redirect (auth0)
  if (isAuthenticated) {
    return true;
  }

  const isSession = useSelector((state) => state.loginState);

  if (!isSession || !isSession.token) {
    return undefined;
  }
  return isSession;
}

export function isLoggedAdmin() {
  const isSession = isLogged();
  if (!isSession) {
    return undefined;
  }

  return isSession.role === 'admin';
}

export function isLoggedAdminEmployee() {
  const isSession = isLogged();
  if (!isSession) {
    return undefined;
  }

  return isSession.role !== 'customer';
}

export async function postImageToCloudinary(e) {
  try {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'eo1vcv2i');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dc8w6pspj/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );

    const userImage = await res.json();
    const imgUri = userImage.secure_url;

    return imgUri;
  } catch (error) {
    return undefined;
  }
}

export async function updateModelImg(modelName, token, imgUri, id) {
  await axios.put(
    `${modelName}/${id}`,
    { imgUri },
    {
      headers: {
        'auth-token': token,
      },
    }
  );
}

export async function postAndUpdateImg(e, modelName, token, id) {
  const imgUri = await postImageToCloudinary(e);
  updateModelImg(modelName, token, imgUri, id);
  return imgUri;
}

// Analytics Cards imports

// Analytics Cards Data
export const cardsData = [
  {
    title: 'VENTAS',
    color: {
      backGround: 'green',
      boxShadow: '0px 10px 20px 0px #000000',
    },
    barValue: 70,
    value: '25,970',
    png: UilUsdSquare,
    series: [
      {
        name: 'Ventas',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: 'INGRESOS',
    color: {
      backGround: 'blue',
      boxShadow: '0px 10px 20px 0px #000000',
    },
    barValue: 80,
    value: '14,270',
    png: UilMoneyWithdrawal,
    series: [
      {
        name: 'ingresos',
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: 'GASTOS',
    color: {
      backGround: 'red',
      boxShadow: '0px 10px 20px 0px #000000',
    },
    barValue: 60,
    value: '4,270',
    png: UilClipboardAlt,
    series: [
      {
        name: 'gastos',
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: 'Andrew Thomas',
    noti: 'has ordered Apple smart watch 2500mh battery.',
    time: '25 seconds ago',
  },
  {
    img: img2,
    name: 'James Bond',
    noti: 'has received Samsung gadget for charging battery.',
    time: '30 minutes ago',
  },
  {
    img: img3,
    name: 'Iron Man',
    noti: 'has ordered Apple smart watch, samsung Gear 2500mh battery.',
    time: '2 hours ago',
  },
];
