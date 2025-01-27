import React, { useState } from "react";
import axios from "axios";

const SpotifyDownloader = () => {
  const [songUrl, setSongUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");

  const handleDownload = async () => {
    if (!songUrl) {
      alert("Please enter a Spotify song URL");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get("https://spotify23.p.rapidapi.com/track", {
        params: { id: songUrl.split("/")[4] }, // Get track ID from URL
        headers: {
          "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      });

      const songData = response.data; // Extract song data from the response
      const songDownloadUrl = songData.preview_url; // Replace with the actual download URL

      setDownloadLink(songDownloadUrl);
    } catch (error) {
      console.error("Error downloading song", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl mb-4">Spotify Song Downloader</h1>
      <input
        type="text"
        value={songUrl}
        onChange={(e) => setSongUrl(e.target.value)}
        placeholder="Enter Spotify song URL"
        className="p-2 mb-4 rounded-md text-black"
      />
      <button
        onClick={handleDownload}
        className="p-2 bg-green-500 rounded-md mb-4"
        disabled={loading}
      >
        {loading ? "Downloading..." : "Download Song"}
      </button>

      {downloadLink && (
        <a
          href={downloadLink}
          download
          className="p-2 bg-blue-500 rounded-md text-white"
        >
          Download Song
        </a>
      )}
    </div>
  );
};

export default SpotifyDownloader;
