import "moment/locale/fr";

import _ from "lodash";
import moment from "moment";

export const getArticlesForDay = (dayStr, daysArticles) => {
  const found = daysArticles.find((item) => item.day === dayStr);
  if (found) {
    console.log("found daysArticle", found);
    return found.articles;
  }
  console.log("not found", daysArticles);
  return [];
};

export const buildDevoirsCalendar = (articles) => {
  const transformed = transformArticles(articles);
  const grouped = _.groupBy(transformed, "startStr");
  let kanbanArray = [];
  _.mapKeys(grouped, function (value, key) {
    const sortedValue = _.sortBy(value, "sequenceStr");
    const lovelyColumn = Object.assign(
      {},
      {
        day: key,
        articles: sortedValue,
      }
    );
    return kanbanArray.push(lovelyColumn);
  });
  //   const sortedKanbanCalendar = _.sortBy(kanbanArray, "day");
  return kanbanArray;
};

export const transformArticle = (art) => {
  const startLabel = moment(art.start_time).format("D[ ]MMM[ ]YYYY");
  const endLabel = moment(art.end_time).format("D[ ]MMM[ ]YYYY");
  const startSort = moment(art.start_time).format("YYMMDD");
  const endSort = moment(art.end_time).format("YYMMDD");
  const startStr = `${startSort}//${startLabel}`;
  const endStr = `${endSort}//${endLabel}`;
  const myArticle = Object.assign(art, {
    startStr,
    endStr,
  });
  return myArticle;
};

export const transformArticles = (articles) => {
  if (!articles || articles.length === 0) {
    return [];
  }
  let transformedArray = [];
  articles.forEach((art) => {
    const transformed = transformArticle(art);
    transformedArray.push(transformed);
  });
  return transformedArray;
};

export const getTodayStr = () => {
  const now = new Date();
  const label = moment(now).format("D[ ]MMM[ ]YYYY");
  const sort = moment(now).format("YYMMDD");
  const str = `${sort}//${label}`;
  console.log(str);
  return str;
};
