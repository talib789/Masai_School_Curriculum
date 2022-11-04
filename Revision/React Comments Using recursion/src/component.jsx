import { nanoid } from "nanoid";
import React, { useState } from "react";

export default function RecursiveComponent({
  points,
  timestamp,
  body,
  author,
  items,
  replies
}) {
  const hasChildren = replies && replies.length;
  const [flag, setflag] = useState(false);
  const [flag2, setflag2] = useState(false);
  const [inpt, setinpt] = useState("");
  return (
    <>
      <div
        className="divv"
        style={flag ? { borderLeft: "3px solid black" } : { border: "none" }}
      >
        <div>
          {hasChildren ? (
            <p
              onClick={() => {
                setflag(!flag);
              }}
              style={{ float: "left", margin: "40px 6px", fontWeight: "1000" }}
            >
              +
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="info">
          <p>
            {author} {points}
          </p>
          <h3>{body}</h3>
          <p>{timestamp}</p>
          <p></p>
          <div style={{ display: "flex" }}>
            {flag2 ? (
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  value={inpt}
                  onChange={(e) => {
                    setinpt(e.target.value);
                  }}
                />
                <p
                  onClick={() => {
                    if (inpt !== "") {
                      replies.push({
                        id: `${nanoid(4)}`,
                        author: "rohan",
                        body: `${inpt}`,
                        timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
                        points: "3",
                        replies: []
                      });
                      setinpt("");
                    }
                    setflag2(!flag2);
                  }}
                >
                  add
                </p>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <p
                  style={{ color: "white", margin: "2px" }}
                  onClick={() => {
                    setflag2(!flag2);
                  }}
                >
                  replay
                </p>
                <p style={{ color: "white", margin: "2px" }}>Give Award</p>
                <p style={{ color: "white", margin: "2px" }}>Share</p>
                <p style={{ color: "white", margin: "2px" }}>Report</p>
                <p style={{ color: "white", margin: "2px" }}>Save</p>
              </div>
            )}
          </div>
        </div>
        {flag &&
          hasChildren &&
          replies.map((item) => <RecursiveComponent key={item.id} {...item} />)}
      </div>
    </>
  );
}
