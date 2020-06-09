import React, { useState } from "react";

import {
  Modal,
  ModalBackground,
  ModalCard,
  Content,
  Delete,
  ModalCardBody,
} from "bloomer";

import { AiOutlineZoomIn } from "react-icons/ai";

export default (props) => {
  const [isActive, setIsActive] = useState(false);
  console.log("from display file", props);
  const { image, styles } = props;
  if (!image) {
    return null;
  }
  const { src, path, name } = image;
  let myPath;
  if (path) {
    myPath = path;
  } else {
    myPath = src;
  }
  console.log("myPath", myPath);
  const url = `https://suncms.imgix.net/${myPath}`;
  return (
    <div>
      <div
        className="zoomable-container"
        style={{
          position: "relative",
          width: image.w,
          maxWidth: "100%",
          height: "auto",
          maxHeight: "100%",
          cursor: "pointer",
        }}
        onClick={() => setIsActive(!isActive)}
      >
        <img src={url} alt={name} style={{ ...styles }} />
        <div className="zoomable-revealed">
          <div className="zoomable-revealed-icon">
            <AiOutlineZoomIn />
          </div>
        </div>
      </div>
      <div>
        {isActive && (
          <Modal isActive={isActive}>
            <ModalBackground
              onClick={() => setIsActive(false)}
              style={{ backgroundColor: "rgb(0, 0, 0, 0.5)" }}
            />
            <ModalCard
              style={{
                maxHeight: "95vh",
                width: image.w + 20,
                maxWidth: 600,
                overflowY: "hidden",
              }}
            >
              <ModalCardBody>
                <Delete
                  style={{ position: "absolute", right: 5, top: 5 }}
                  onClick={() => setIsActive(false)}
                />
                <Content
                  isMarginless
                  isPaddingless
                  isHidden={["mobile"]}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                    marginBottom: 10,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={url}
                    alt="zoom"
                    style={{
                      textAlign: "center",
                      width: "100%",
                      maxHeigth: "70vh",
                      resizeMode: "contain",
                    }}
                  />
                </Content>
                <Content
                  isMarginless
                  isPaddingless
                  isHidden={["tablet"]}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                    marginBottom: 10,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={url}
                    alt="zoom"
                    style={{
                      textAlign: "center",
                      maxWidth: "90vw",
                      maxHeigth: "60vh",
                      resizeMode: "contain",
                    }}
                  />
                </Content>
              </ModalCardBody>
            </ModalCard>
          </Modal>
        )}
      </div>
    </div>
  );
};
