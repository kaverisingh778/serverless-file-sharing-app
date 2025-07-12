import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setStatus("");
  };

  const uploadFile = async () => {
    if (!file) {
      setStatus("Please select a file.");
      return;
    }

    try {
      setStatus("Requesting upload URL...");

      const apiUrl = `https://sy0vs60zia.execute-api.ap-south-1.amazonaws.com/prod/generate-upload-url?filename=${file.name}`;

      const res = await axios.get(apiUrl);
      const { upload_url, file_id } = res.data;

      setStatus("Uploading to S3...");

      await axios.put(upload_url, file, {
        headers: { "Content-Type": file.type },
      });

      setStatus(`✅ File uploaded successfully! File ID: ${file_id}`);
    } catch (err) {
      console.error(err);
      setStatus("❌ Upload failed. Check console.");
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h2>☁️ Serverless File Uploader</h2>
      <input type="file" onChange={handleFileChange} />
      <br /><br />
      <button onClick={uploadFile} style={{ padding: "10px 20px" }}>Upload</button>
      <p>{status}</p>
    </div>
  );
}

export default App;

