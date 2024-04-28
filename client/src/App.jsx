import React, { useState } from "react";
import { Home } from "./views/Home";
import RecentInsertionPage from "./views/RecentInsertionPage";
import { LoadingProvider } from "./contexts/LoadingContext";
import AudioTranscription from "./components/AudioTranscription";
import LinearWithValueLabel from "./components/ProgressBar";

const App = () => {
  const [databaseEntry, setDatabaseEntry] = useState({
    "67b2c55e-60af-488a-a228-0ffec602e9ee": [
      {
        "time": {
          "@class": "DV_DATE_TIME",
          "value": "2024-04-24T22:06:43.179+02:00"
        },
        "exam": {
          "@class": "DV_TEXT",
          "value": "Lumbar spine, two views, anterior, posterior lateral, flexion extension views."
        },
        "technique": {
          "@class": "DV_TEXT",
          "value": "APM lateral flexion extension views of the lumbar spine."
        },
        "History": {
          "@class": "DV_TEXT",
          "value": "Patient has a history of back pain."
        },
        "findings": {
          "@class": "DV_TEXT",
          "value": "1. No fractures identified. 2. Normal bone density."
        },
        "Comparison": {
          "@class": "DV_TEXT",
          "value": "Comparison radiographs available from March 16, 2021."
        },
        "impressions": {
          "@class": "DV_TEXT",
          "value": "1. No fracture or osteopathology. 2. Mild facet anthropathy at L5-S1 bilaterally."
        },
        "Clinical_summary": {
          "@class": "DV_TEXT",
          "value": "EXAM: Lumbar spine, two views, anterior, posterior lateral, flexion extension views. HISTORY: Patient has a history of back pain. TECHNIQUE: APM lateral flexion extension views of the lumbar spine. COMPARISON: Comparison radiographs available from March 16, 2021. FINDINGS: 1. No fractures identified. 2. Normal bone density. IMPRESSIONS: 1. No fracture or osteopathology. 2. Mild facet anthropathy at L5-S1 bilaterally."
        }
      }
    ],
    "02e1aac1-ae7e-41e6-be9d-328855a51eeb": [
      {
        "time": {
          "@class": "DV_DATE_TIME",
          "value": "2024-04-24T22:06:43.179+02:00"
        },
        "exam": {
          "@class": "DV_TEXT",
          "value": "Lumbar spine, two views, anterior, posterior lateral, flexion extension views."
        },
        "technique": {
          "@class": "DV_TEXT",
          "value": "APM lateral flexion extension views of the lumbar spine."
        },
        "History": {
          "@class": "DV_TEXT",
          "value": "Patient has a history of back pain."
        },
        "findings": {
          "@class": "DV_TEXT",
          "value": "1. No fractures identified. 2. Normal bone density."
        },
        "Comparison": {
          "@class": "DV_TEXT",
          "value": "Comparison radiographs available from March 16, 2021."
        },
        "impressions": {
          "@class": "DV_TEXT",
          "value": "1. No fracture or osteopathology. 2. Mild facet anthropathy at L5-S1 bilaterally."
        },
        "Clinical_summary": {
          "@class": "DV_TEXT",
          "value": "EXAM: Lumbar spine, two views, anterior, posterior lateral, flexion extension views. HISTORY: Patient has a history of back pain. TECHNIQUE: APM lateral flexion extension views of the lumbar spine. COMPARISON: Comparison radiographs available from March 16, 2021. FINDINGS: 1. No fractures identified. 2. Normal bone density. IMPRESSIONS: 1. No fracture or osteopathology. 2. Mild facet anthropathy at L5-S1 bilaterally."
        }
      }
    ]
  });
  const [showRecord, setShowRecord] = useState(false);
  const [captions, setCaptions] = useState("");
  const [fullTranscription, setFullTranscription] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [showCaptions, setShowCaptions] = useState(true);

  const [progress, setProgress] = useState(0);
  const totalSteps = 4;
  const increment = 100 / totalSteps;

  const handleProgress = async () => {
    setProgress((prevProgress) => prevProgress + increment);
  };

  return (
    <>
      <LoadingProvider>
        {databaseEntry ? (
          <RecentInsertionPage
            databaseEntry={databaseEntry}
            handleProgress={handleProgress}
          />
        ) : (
          <Home
            isRecording={isRecording}
            setIsRecording={setIsRecording}
            captions={captions}
            setCaptions={setCaptions}
            fullTranscription={fullTranscription}
            setFullTranscription={setFullTranscription}
            showRecord={showRecord}
            setShowRecord={setShowRecord}
            databaseEntry={databaseEntry}
            setDatabaseEntry={setDatabaseEntry}
            showCaptions={showCaptions}
            setShowCaptions={setShowCaptions}
            handleProgress={handleProgress}
          />
        )}
        <LinearWithValueLabel progress={progress} />
        <AudioTranscription
          captions={captions}
          setCaptions={setCaptions}
          fullTranscription={fullTranscription}
          setFullTranscription={setFullTranscription}
          isRecording={isRecording}
          setIsRecording={setIsRecording}
          showCaptions={showCaptions}
          setShowCaptions={setShowCaptions}
          showRecord={showRecord}
          setShowRecord={setShowRecord}
          handleProgress={handleProgress}
        />
      </LoadingProvider>
    </>
  );
};

export default App;
