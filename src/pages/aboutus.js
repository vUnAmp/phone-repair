import React from "react";
import Layout from "../components/layout";
import { Handy, OpenTime, Address } from "../components/shared/Kontakt";
const aboutus = () => {
  return (
    <Layout>
      <h1>Is building ....</h1>
      <Handy />
      <OpenTime />
      <Address />
    </Layout>
  );
};

export default aboutus;
