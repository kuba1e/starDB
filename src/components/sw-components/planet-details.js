import SwapiService from "../../services/swapi-service";
import ItemDetails from "../item-details";
import ItemHelpers from "../item-details-helper";
import React, { Fragment } from "react";
import { Record } from "../item-details";

const { getPlanet, getPlanetImageUrl } = new SwapiService();

const getPlanetRecordField = () => {
  return (
    <Fragment>
      <Record field={"name"} label={"Name"} />
      <Record field={"population"} label={"Population"} />
      <Record field={"diameter"} label={"Diameter"} />
    </Fragment>
  );
};

const PlanetDetails = ItemHelpers(ItemDetails, getPlanet, getPlanetImageUrl, getPlanetRecordField);

export default PlanetDetails;
