import SwapiService from "../../services/swapi-service";
import ItemDetails from "../item-details";
import ItemHelpers from "../item-details-helper";
import { Record } from "../item-details";
import React, { Fragment } from "react";

const { getStarship, getStarshipImageUrl } = new SwapiService();

const getStarshipRecordField = () => {
  return (
    <Fragment>
      <Record field={"name"} label={"Name"} />
      <Record field={"passengers"} label={"Passengers"} />
      <Record field={"length"} label={"Length"} />
    </Fragment>
  );
};

const StarshipDetails = ItemHelpers(
  ItemDetails,
  getStarship,
  getStarshipImageUrl, 
  getStarshipRecordField
);

export default StarshipDetails;
