import React, { useState } from 'react';
import frame0 from './frames/frame000000.png';
import frame1 from './frames/frame000001.png';
import frame2 from './frames/frame000002.png';
import frame3 from './frames/frame000003.png';
import frame4 from './frames/frame000004.png';
import frame5 from './frames/frame000005.png';
import frame6 from './frames/frame000006.png';
import frame7 from './frames/frame000007.png';
import frame8 from './frames/frame000008.png';
import frame9 from './frames/frame000009.png';
import frame10 from './frames/frame000010.png';
import frame11 from './frames/frame000011.png';
import frame12 from './frames/frame000012.png';
import frame13 from './frames/frame000013.png';
import frame14 from './frames/frame000014.png';
import frame15 from './frames/frame000015.png';
import frame16 from './frames/frame000016.png';
import frame17 from './frames/frame000017.png';
import frame18 from './frames/frame000018.png';
import frame19 from './frames/frame000019.png';
import frame20 from './frames/frame000020.png';
import frame21 from './frames/frame000021.png';
import frame22 from './frames/frame000022.png';
import frame23 from './frames/frame000023.png';
import frame24 from './frames/frame000024.png';
import frame25 from './frames/frame000025.png';
import frame26 from './frames/frame000026.png';
import frame27 from './frames/frame000027.png';
import frame28 from './frames/frame000028.png';
import frame29 from './frames/frame000029.png';
import frame30 from './frames/frame000030.png';
import frame31 from './frames/frame000031.png';
import frame32 from './frames/frame000032.png';
import frame33 from './frames/frame000033.png';
import frame34 from './frames/frame000034.png';
import frame35 from './frames/frame000035.png';
import frame36 from './frames/frame000036.png';
import frame37 from './frames/frame000037.png';
import frame38 from './frames/frame000038.png';
import frame39 from './frames/frame000039.png';
import frame40 from './frames/frame000040.png';
import frame41 from './frames/frame000041.png';
import frame42 from './frames/frame000042.png';
import frame43 from './frames/frame000043.png';
import frame44 from './frames/frame000044.png';
import frame45 from './frames/frame000045.png';
import frame46 from './frames/frame000046.png';
import frame47 from './frames/frame000047.png';
import frame48 from './frames/frame000048.png';
import frame49 from './frames/frame000049.png';
import frame50 from './frames/frame000050.png';

const ImageSlider = () => {
  const [value, setValue] = useState(1); // Assuming frame numbering starts from 1

  const handleChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  const frames = [
    frame0,
    frame1,
    frame2,
    frame3,
    frame4,
    frame5,
    frame6,
    frame7,
    frame8,
    frame9,
    frame10,
    frame11,
    frame12,
    frame13,
    frame14,
    frame15,
    frame16,
    frame17,
    frame18,
    frame19,
    frame20,
    frame21,
    frame22,
    frame23,
    frame24,
    frame25,
    frame26,
    frame27,
    frame28,
    frame29,
    frame30,
    frame31,
    frame32,
    frame33,
    frame34,
    frame35,
    frame36,
    frame37,
    frame38,
    frame39,
    frame40,
    frame41,
    frame42,
    frame43,
    frame44,
    frame45,
    frame46,
    frame47,
    frame48,
    frame49,
    frame50,
  ];

  return (
    <div className="mx-[300px] flex flex-col justify-center items-center gap-5 my-10">
      <div className="border-2 border-black w-full flex items-center justify-center">
        <img
          src={frames[value - 1]}
          alt={`frame ${value}`}
          style={{ width: '500px' }}
        />
      </div>
      <input
        type="range"
        min="1"
        max="50"
        value={value}
        onChange={handleChange}
        className="w-[100%]"
      />
    </div>
  );
};

export default ImageSlider;
