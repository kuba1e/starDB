import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context";

const withSwapiServiceList = (Wrapped, mapPersonMethodsToProps)=>{
  return (props)=>{
    return (
    <SwapiServiceConsumer >
      {
      (swapi)=>{
        return <Wrapped {...props} {...mapPersonMethodsToProps(swapi)}/>
      }}
    </SwapiServiceConsumer>
  )}}

  export default withSwapiServiceList