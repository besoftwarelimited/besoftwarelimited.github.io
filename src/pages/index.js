import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Our Story</h1>
    <p>We have been providing IT consultancy services for over 5 years across a range of sectors and technology stacks.</p>
    <ul>
      <li>Modern progressive web development</li>
      <li>Open standard web APIs</li>
      <li>Automation testing and quality assurance</li>
      <li>Continuous delivery automation</li>
      <li>Cloud infrastructure design & automation</li>
      <li>Agile delivery consultancy</li>
    </ul>
  </Layout>
);

export default IndexPage;
