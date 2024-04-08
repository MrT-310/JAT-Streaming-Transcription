import React, { useState } from "react";
import InsertData from "./InsertData";
import "../styles/transcriptionprocessor.css";

const ShowReport = ({ report }) => {
  // let content = report;
  console.log("report  is:", report);
  return (
    <>
      <span className="full-report" id="gpt-response">{report}</span>
    </>
  );
};

const ShowJson = ({ json }) => {
  console.log("json is:", json);
  return (
    <>
      <span className="full-json" id="json-response">{json}</span>
      <InsertData jsonString={json} />
    </>
  );
};

const TranscriptionProcessor = ({ fullTranscription }) => {
  const [report, setReport] = useState("");
  const [json, setJson] = useState("");

  const chatWithGPT = async (content) => {
    try {
      const response = await fetch("/api/createReport", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      if (!response.ok) throw new Error("Network response was not ok.");
      const data = await response.json();
      if (data) {
        setReport(data.choices[0].message.content);
      } else {
        console.error("Error while setting your report.");
      }
      console.log("Report creation successful:", data);
    } catch (error) {
      console.error("Error while making your report:", error);
    }
  };

  // Function to format radiology report into JSON (adapted from provided code)
  const jsonGPT = async (content) => {
    try {
      const response = await fetch("/api/createJson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      const data = await response.json();
      console.log("JSON creation successful:", data);
      if (data) {
        setJson(data.choices[0].message.content);
      } else {
        console.error("Error while setting json.");
      }
      // Assuming you want to do something with the response data here
    } catch (error) {
      console.error("Error while formatting your JSON data:", error);
    }
  };

  // Function to handle the button click and initiate the API calls
  const handleProcessClick = () => {
    chatWithGPT(fullTranscription);
    jsonGPT(fullTranscription);
  };

  return (
    <span className="returned-data" id="returned-data">
      <button
        className="info-button reformat-button"
        id="reformat-button"
        onClick={handleProcessClick}
      >
        Make Report
      </button>
      <span id="response-containers" className="response-container">
        {report ? <ShowReport report={report} /> : null}
        {json ? <ShowJson json={json} /> : null}
      </span>
    </span>
  );
};

export default TranscriptionProcessor;
