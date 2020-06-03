import React from "react";

import { Columns, Column } from "bloomer";

import DisplayFile from "./display_file";
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
          {articles && <DayList articles={articles} sequence={seq} />}
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
      articles && articles.filter((art) => art.sequenceStr === sequence.name);
  }
  if (!filtered || filtered.length === 0) {
    return null;
  }
  return (
    <div style={{ margin: 10 }}>
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
        <p style={styles.seq}>
          {sequence && sequence.name && sequence.name.toUpperCase()}
        </p>
      </div>
      <div style={{ marginBottom: 40 }}>
        {filtered &&
          filtered.map((art) => (
            <div key={art.id}>
              <div style={styles.title}>{art.title}</div>
              {art.topImage &&
                art.topImage.id !== "d68a4810-bf73-4ee6-80d5-5df513b186f1" && (
                  <DisplayFile image={art.topImage} styles={styles.img} />
                )}
              <div style={{ marginTop: 10 }}>
                {art.image &&
                  art.image.id !== "d68a4810-bf73-4ee6-80d5-5df513b186f1" && (
                    <Columns>
                      <Column isSize={7}>
                        <div>
                          <MyEditor content={art.content} />
                        </div>
                      </Column>
                      <Column isSize={5}>
                        <div style={{ marginTop: 10 }}>
                          {art.image &&
                            art.image.id !==
                              "d68a4810-bf73-4ee6-80d5-5df513b186f1" && (
                              <DisplayFile
                                image={art.image}
                                styles={styles.img}
                              />
                            )}
                        </div>
                      </Column>
                    </Columns>
                  )}
              </div>
              <div style={{ marginTop: 10 }}>
                {(!art.image ||
                  art.image.id === "d68a4810-bf73-4ee6-80d5-5df513b186f1") && (
                  <div>
                    <MyEditor content={art.content} />
                  </div>
                )}
              </div>
              {art.btmImage &&
                art.btmImage.id !== "d68a4810-bf73-4ee6-80d5-5df513b186f1" && (
                  <DisplayFile image={art.btmImage} styles={styles.img} />
                )}
              <div style={{ marginTop: 20 }}>
                {art.pdfFile && <PdfLink pdf={art.pdfFile} />}
              </div>
              <Line />
            </div>
          ))}
      </div>
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
    fontFamily: "BarlowSemiCondensed-Bold",
  },
  desc: {
    fontSize: 13,
    fontFamily: "BarlowSemiCondensed-Light",
  },
};

export default Day;
