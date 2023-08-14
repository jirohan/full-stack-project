import React from 'react'
import { HeaderComponent } from '../../../components/HeaderComponent'
import { useParams, useSearchParams } from 'react-router-dom'

const CategoryDetail = () => {
    let params = useParams()
    let [query, setQuery] = useSearchParams();
  return (
    <>
        <HeaderComponent />

        I Am Category Detail
    </>
  )
}

export default CategoryDetail