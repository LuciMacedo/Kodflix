import React from 'react';
import Stack from './Stack';
import Frozen from './images/frozen.jpeg';
import iceAge from './images/iceAge.jpeg';
import Madagascar from './images/madagascar.jpeg';
import Shreck from './images/shreck.jpeg';
import Smurfs from './images/smurfs.jpeg';
import TrainDragon from './images/trainDragon.jpeg';
import Matilda from './images/matilda.jpeg';
import Walle from './images/walle.jpeg';
import Rio from './images/rio.jpeg';
import Ralph from './images/ralph.jpeg';

export default function Gallery() {
    return (
        <div className='container'>
            <Stack id='Frozen' name='Frozen' cover={Frozen} />
            <Stack id='Ice Age' name='Ice Age' cover={iceAge} />
            <Stack id='Madagascar' name='Madascar' cover={Madagascar} />
            <Stack id='Shreck' name='Shreck' cover={Shreck} />
            <Stack id='Smurfs' name='Smurfs' cover={Smurfs} />
            <Stack id= 'trainDragon' name='How to train your dragon' cover={TrainDragon} />
            <Stack id='Matilda' name='Matilda' cover={Matilda} />
            <Stack id='Walle' name='Walle' cover={Walle} />
            <Stack id='Rio' name='Rio' cover={Rio} />
            <Stack id='Ralph' name='Ralph' cover={Ralph} />
        </div>
    );
    }        