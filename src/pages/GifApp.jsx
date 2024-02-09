import React from 'react'
import { useState } from 'react';
import { ListCategory } from '../assets/components/ListCategory';
import { SearchCategory } from '../assets/components/SearchCategory';
import { Apigif } from '../helpers/Api';

export const GifApp = () => {

const [list, setList] = useState(["Goku","Vegetta", "Kakaratto"]);


  return (
    <>
    <h1>Gift App</h1>
        <div>
            <Apigif/>
            <SearchCategory elementList = {list} SetElementList = {setList}/>
            <ListCategory elementList = {list} SetElementList = {setList}/>
        </div>
    </>
  )
}
