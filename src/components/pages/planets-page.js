import React from 'react'
import { withRouter } from 'react-router-dom'
import Row from '../row'
import {PlanetDetails, PlanetList } from '../sw-components'


const PlanetsPage = ({match, history})=> {
    return (
      <Row
      left={<PlanetList onItemSelected = {(itemId)=>{
        history.push(`${itemId}`)
      }}/>}
      right={<PlanetDetails itemId={match.params.id} />}
    ></Row>
    )
  }


export default withRouter(PlanetsPage)