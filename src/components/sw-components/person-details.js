import SwapiService from "../../services/swapi-service";
import ItemDetails from "../item-details";
import ItemHelpers from "../item-details-helper";
import { Record } from "../item-details";
import React, { Fragment } from "react";

const { getPerson, getPersonImageUrl } = new SwapiService();

const getPersonRecordField = () => {
  return (
    <Fragment>
      <Record field={"gender"} label={"Gender"} />
      <Record field={"skin"} label={"Skin"} />
      <Record field={"mass"} label={"Mass"} />
    </Fragment>
  );
};

const PersonDetails = ItemHelpers(ItemDetails, getPerson, getPersonImageUrl, getPersonRecordField);

export default PersonDetails;
