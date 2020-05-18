import React from "react";
import * as colors from "./colors";

export default (props) => {
  const { setSelectedDay, daysStrs } = props;
  const managedClicked = (item) => {
    console.log(item);
    setSelectedDay(item);
  };
  return (
    <div style={{ margin: 10 }}>
      {daysStrs.map((day) => (
        <div
          style={{ margin: 10, marginLeft: 20 }}
          onClick={() => managedClicked(day)}
          key={day}
        >
          <DayLabel day={day} />
        </div>
      ))}
    </div>
  );
};

const DayLabel = (props) => {
  const { day } = props;
  const dayArray = day.split("//");
  const label = dayArray[1];
  return <p style={styles.day}>{label}</p>;
};

const styles = {
  day: {
    fontSize: 14,
    color: colors.bleunoir,
    cursor: "pointer",
  },
};
