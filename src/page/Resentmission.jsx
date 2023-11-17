import React from 'react';
import Miss from './mission/Miss'

const Resentmission = () => {
    const rmission=[
        {
            id:1,
            image:'https://www.ses.com/sites/default/files/2023-05/O3b_mPOWER-B_outsidewaterh_IMG_2088.jpg',
            tophic:'RECENT LAUNCH',
            headtophic1:'SES O3B MPOWER',
            headtophic2:'MISSION',
            missButton:'Rewatch',
            path:'/',

        }
        ,
        {
            id:2,
            image:'https://www.ses.com/sites/default/files/2023-11/O3b_mPOWER-C_outsidewater_IMG_2814_0.jpg',
            tophic:'RECENT LAUNCH',
            headtophic1:'TRANSPORTER-9',
            headtophic2:'MISSION',
            missButton:'Rewatch',
            path:'/',

        },
        {
            id:3,
            image:'https://www.ses.com/sites/default/files/2021-06/O3b-mPOWER-Constellation-Rendition-Europe-Middle-East-and-Africa.jpg',
            tophic:'RECENT LAUNCH',
            headtophic1:'CRS-29 MISSION',
            headtophic2:'',
            missButton:'Rewatch',
            path:'/',

        }
        
    ]
    return (
        <div className='relative -z-50'>
            {
                rmission.map((route=><Miss
                key={route.id} route={route}>

                </Miss>))
            }
            
        </div>
    );
};

export default Resentmission;