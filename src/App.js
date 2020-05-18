import React, { useState } from "react";
import "./App.css";
import useDidMount from "@rooks/use-did-mount";
import { API, graphqlOperation } from "aws-amplify";

import Layout from "./layout";

import { buildDevoirsCalendar } from "./helpers";
import * as queries from "./graphql/queries";

const AppWithData = () => {
  const [articles, setArticles] = useState([]);
  const [sequencesItem, setSequencesItem] = useState([]);
  useDidMount(() => {
    API.graphql(
      graphqlOperation(queries.getProject, {
        id: "6ed15a83-fac4-43f2-9b66-31eaa3c51045",
      })
    ).then(function (value) {
      const { data } = value;
      const { getProject } = data;
      const { articles, sequences } = getProject;
      const sequencesItem = sequences.items;
      const { items } = articles;
      const filteredItems = items.filter((item) => !item.isDraft);
      setSequencesItem(sequencesItem);
      // console.log("Sequnces from query", sequencesItem);
      setArticles(filteredItems);
    });
  });
  return (
    <div className="App">
      {articles && (
        <Layout
          daysArticles={buildDevoirsCalendar(articles)}
          sequences={sequencesItem}
        />
      )}
    </div>
  );
};

export default AppWithData;
