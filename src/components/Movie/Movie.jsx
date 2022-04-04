import React from 'react'
import Data from '../Data'
import { useParams, useHistory } from 'react-router-dom'
import CustomCard from '../UI/CustomCard'
import { Button } from 'react-bootstrap'

export default function Movie() {
    const {id}=useParams()
    const History = useHistory()
    if(id==0){ 
        History.push('/')
        window.location.reload()
    }
    if(id>Data.length){
        History.push('/')
        window.location.reload()
    }
    const found = Data.filter((el,_)=> el.id==id)
    console.log(useHistory())

  return (
    <div>
         <div>
        {found[0].title}
        </div>
        <div>
        {found[0].trailer}
        </div>
        <Button variant='danger' onClick={()=> History.goBack()}>  go back </Button>
        <Button variant='success' onClick={()=> History.push('/')}>  Home </Button>
        {id<=Data.length-1? 
        <Button variant='warning' onClick={()=> History.push(`/Movie/${found[0].id+1}`)}>  Next </Button>
        : ''}

        {id>1 ? 
        <Button variant='primary' onClick={()=> History.push(`/Movie/${found[0].id-1}`)}>  Previous </Button>
        : ''}

    </div>
  )
}
