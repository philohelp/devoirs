import React, { useState } from "react";
import _ from "lodash";

import { Columns, Column, Box } from "bloomer";

import DaysList from "./days_list";
import Day from "./day";

import { getArticlesForDay, getTodayStr } from "./helpers";
import * as colors from "./colors";

export default (props) => {
  const { daysArticles, sequences } = props;
  const [selectedDay, setSelectedDay] = useState(getTodayStr());
  const daysStrs = _.map(daysArticles, "day");
  return (
    <div>
      <Box>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <p style={styles.header}>Devoirs de la classe de CM2 de M. Stella</p>
        </div>
      </Box>
      <Columns>
        <Column isSize={2} style={{ backgroundColor: colors.grisfff }}>
          <div style={{ margin: 10 }}>
            <DaysList setSelectedDay={setSelectedDay} daysStrs={daysStrs} />
          </div>
        </Column>
        <Column isSize={8}>
          {daysArticles && (
            <Day
              selectedDay={selectedDay}
              sequences={sequences}
              articles={getArticlesForDay(selectedDay, daysArticles)}
            />
          )}
        </Column>
        <Column isSize={2} />
      </Columns>
    </div>
  );
};

const styles = {
  header: {
    marginLeft: 20,
    fontSize: 24,
    fontFamily: "BarlowSemiCondensed-Light",
  },
};
