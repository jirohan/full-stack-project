import React from 'react'
import { HeaderComponent } from '../../../components/HeaderComponent'
import { useParams, useSearchParams } from 'react-router-dom'

const CategoryDetail = () => {
    let params = useParams()
    let [query, setQuery] = useSearchParams();
    // console.log(query.get('page'));
    // console.log("Params: ", params)
  return (
    <>
        <HeaderComponent />

        I Am Category Detail of: {params.id}
    </>
  )
}

export default CategoryDetail