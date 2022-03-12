import React from 'react'
import { StarshipList } from '../sw-components'
import { withRouter } from 'react-router-dom'


 const StarshipsPage=({history})=> {

    return (
      <StarshipList onItemSelected = {(itemID)=>{
        const newPath = `${itemID}`
        history.push(newPath)
      }}/>
    )
  }

  export default withRouter(StarshipsPage)