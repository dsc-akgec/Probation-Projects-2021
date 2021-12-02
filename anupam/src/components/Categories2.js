
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../pages/Responsive'
import CategoriesItem from './CategoriesItem'
import { categoriesphone } from './Data'


const Container =styled.div`
    display:flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({padding: "0px",flexDirection: "column"})}

`
const Categories2 = () => {


    return (
        <Container>
            {
                categoriesphone.map(item=>(
                    <CategoriesItem item={item} key={item.id}/>
                ))
            }

        </Container>
    )
}

export default Categories2