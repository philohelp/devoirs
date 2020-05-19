import React from "react";
import * as colors from "./colors";

export default (props) => {
  const { selectedDay, setSelectedDay, daysStrs } = props;
  const reversedDaysStr = daysStrs.reverse();
  const managedClicked = (item) => {
    console.log(item);
    setSelectedDay(item);
  };
  return (
    <div style={{ margin: 10, marginTop: 20 }}>
      {reversedDaysStr &&
        reversedDaysStr.map((day) => (
          <div
            style={{ margin: 10, marginLeft: 20 }}
            onClick={() => managedClicked(day)}
            key={day}
          >
            <DayLabel day={day} selectedDay={selectedDay} />
          </div>
        ))}
    </div>
  );
};

const DayLabel = (props) => {
  const { day, selectedDay } = props;
  const dayArray = day.split("//");
  const label = dayArray[1];
  return (
    <p style={day === selectedDay ? styles.dayStrong : styles.day}>{label}</p>
  );
};

const styles = {
  day: {
    fontSize: 14,
    color: colors.gris,
    cursor: "pointer",
    fontFamily: "BarlowSemiCondensed-Medium",
  },
  dayStrong: {
    fontSize: 15,
    color: colors.bleunoir,
    cursor: "pointer",
    fontFamily: "BarlowSemiCondensed-SemiBold",
  },
};
