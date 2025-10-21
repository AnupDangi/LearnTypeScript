import './App.css';
import { useState } from "react";
import fetchJSON from "./components/apifetch";
import type { Joke, Photo } from './types/types';

type Status = "idle" | "loading" | "success" | "error";

function App() {
  const [jokes, setJokes] = useState<Joke | null>(null);
  const [photos, setPhotos] = useState<Photo[] | null>(null);
  const jokesUrl = "https://official-joke-api.appspot.com/random_joke";
  const photosUrl = "https://boringapi.com/api/v1/photos";
  const [photosStatus, setPhotosStatus] = useState<Status>("idle");
  const [jokesStatus, setJokesStatus] = useState<Status>("idle");

  const getStatusColor = (s: Status) => {
    switch (s) {
      case "loading": return "text-yellow-500";
      case "success": return "text-green-500";
      case "error": return "text-red-500";
      default: return "text-gray-500";
    }
  };

  const getJoke = async () => {
    setJokesStatus("loading");
    try {
      const data = await fetchJSON<Joke>(jokesUrl);
      console.log(data);
      setJokes(data);
      setJokesStatus("success");
    } catch (error) {
      setJokesStatus("error");
      console.error(error);
    }
  };

  const getPhotos = async () => {
    setPhotosStatus("loading");
    try {
      const data = await fetchJSON<any>(photosUrl);
      console.log(data);
      setPhotos(data.photos || []);
      setPhotosStatus("success");
    } catch (error) {
      setPhotosStatus("error");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">API Dashboard</h1>

        {/* Jokes Section */}
        <div className="bg-white shadow-lg rounded-xl p-8 mb-8 border border-gray-200">
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={getJoke}
              disabled={jokesStatus === "loading"}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get Jokes
            </button>
            <span className={`text-lg ${getStatusColor(jokesStatus)} font-medium`}>
              Status: {jokesStatus.charAt(0).toUpperCase() + jokesStatus.slice(1)}
            </span>
            {jokes && jokesStatus === "success" && (
              <div className="w-full max-w-md text-center">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Joke</h2>
                <div className="bg-gray-100 rounded-lg p-4 mb-3">
                  <p className="text-lg font-medium text-gray-800 italic">{jokes.setup}</p>
                </div>
                <p className="text-lg text-blue-600 font-semibold">{jokes.punchline}</p>
                <p className="text-sm text-gray-500 mt-2">Type: {jokes.type}</p>
              </div>
            )}
          </div>
        </div>

        {/* Photos Section */}
        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={getPhotos}
              disabled={photosStatus === "loading"}
              className="bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get Photos
            </button>
            <span className={`text-lg ${getStatusColor(photosStatus)} font-medium`}>
              Status: {photosStatus.charAt(0).toUpperCase() + photosStatus.slice(1)}
            </span>
            {photos && photos.length > 0 && photosStatus === "success" && (
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo) => (
                  <div key={photo.id} className="bg-gray-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
                    <p className="text-sm font-medium text-gray-700 mb-3 line-clamp-2">{photo.description}</p>
                    <div className="flex justify-center">
                      <img
                        src={photo.url}
                        width="200"
                        alt={photo.description || "Photo"}
                        className="rounded-md object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
