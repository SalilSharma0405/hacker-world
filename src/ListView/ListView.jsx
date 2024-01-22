import React, { useState } from 'react'
import JSONData from '../data.json';
import { CardView } from '../CardView/CardView';

import './ListView.scss';

const ListView = ({ userName }) => {
    const [items, setItems] = useState(JSONData);
    const [currentAccordian, setCurrentAccordian] = useState('');


    const filterRenderItems = items.filter((item) => item.first.toLocaleUpperCase().includes(userName.toLocaleUpperCase()) || item.last.toLocaleUpperCase().includes(userName.toLocaleUpperCase()) || !userName)


    return (
        <div className='listContainer'>
            <div> {filterRenderItems.length ? filterRenderItems.map((data, index) => {
                return <CardView currentAccordian={currentAccordian} key={data.id} data={{ ...data, index }} setItems={setItems} setCurrentAccordian={setCurrentAccordian}/>
            }) : <div>No details found</div>}</div>
        </div>
    )
}


export {
    ListView
}