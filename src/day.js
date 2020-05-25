import React from "react";
import "./App.css";

import { S3Image } from "aws-amplify-react";

import MyEditor from "./editor";
import PdfLink from "./pdf_link";
import Line from "./line";

import * as colors from "./colors";

const Day = (props) => {
  const { articles, sequences } = props;
  return (
    <div>
      {sequences.map((seq) => (
        <div key={seq.id}>
          <div
            style={{
              height: 40,
              width: "100%",
              color: "white",
              backgroundColor: colors.bleudoux,
              padding: 8,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <p style={styles.seq}>{seq.name.toUpperCase()}</p>
          </div>
          <div style={{ margin: 10 }}>
            {articles && <DayList articles={articles} sequence={seq.name} />}
          </div>
        </div>
      ))}
    </div>
  );
};

const DayList = (props) => {
  const { articles, sequence } = props;
  console.log(articles);
  let filtered = [];
  if (articles) {
    filtered =
      articles && articles.filter((art) => art.sequenceStr === sequence);
  }
  return (
    <div style={{ marginBottom: 40 }}>
      {filtered &&
        filtered.map((art) => (
          <div key={art.id}>
            <div style={styles.title}>{art.title}</div>
            {art.img !== "pictos/placeholder" && (
              <S3Image imgKey={art.img} theme={{ photoImg: styles.img }} />
            )}
            <div>
              <MyEditor content={art.content} />
            </div>
            {art.img2 && art.img2 !== "pictos/placeholder" && (
              <S3Image imgKey={art.img2} theme={{ photoImg: styles.img }} />
            )}
            <div style={{ marginTop: 20 }}>
              {art.pdfFile && <PdfLink pdf={art.pdfFile} />}
            </div>
            <Line />
          </div>
        ))}
    </div>
  );
};

const styles = {
  img: {
    maxHeight: 400,
  },
  seq: {
    fontSize: 15,
    fontFamily: "BarlowSemiCondensed-Bold",
  },
  title: {
    fontSize: 18,
    color: colors.bleunoir,
    fontFamily: "BarlowSemiCondensed-SemiBold",
  },
  desc: {
    fontSize: 13,
    fontFamily: "BarlowSemiCondensed-Light",
  },
};

export default Day;
