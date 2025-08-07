
import { useState } from "react";

export default function Home() {
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [reflection, setReflection] = useState("");
  const [emotion, setEmotion] = useState(null);

  const audios = [
    {
      title: "🌀 Theseus und der Minotaurus",
      file: "/Theseus Geschichte.mp3"
    },
    {
      title: "🌬 Focusing-Übung",
      file: "/Focusing Übung.mp3"
    },
    {
      title: "🎭 Fantasiereise ins Innere Theater",
      file: "/Fantasiereise ins Innere Theater.mp3"
    }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #e0e7ff, white)",
      padding: "2rem",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", color: "#3730a3", marginBottom: "2rem" }}>
        Willkommen in der Traumwerkstatt
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
        {audios.map((audio, index) => (
          <div key={index} onClick={() => setSelectedAudio(audio)} style={{
            border: "1px solid #c7d2fe",
            borderRadius: "1rem",
            padding: "1rem",
            background: "white",
            cursor: "pointer",
            width: "250px",
            textAlign: "center",
            color: "#4338ca"
          }}>
            {audio.title}
          </div>
        ))}
      </div>

      {selectedAudio && (
        <div style={{
          marginTop: "2rem",
          background: "white",
          padding: "1.5rem",
          borderRadius: "1rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{ color: "#3730a3" }}>{selectedAudio.title}</h2>
          <audio controls style={{ width: "100%", marginTop: "1rem" }}>
            <source src={selectedAudio.file} type="audio/mpeg" />
            Dein Browser unterstützt kein Audio.
          </audio>

          <p style={{ marginTop: "1rem", color: "#4338ca" }}>Wie fühlst du dich nach dem Hören?</p>
          <div style={{ fontSize: "1.5rem", display: "flex", gap: "1rem" }}>
            {['😌', '😐', '😟'].map((e, idx) => (
              <button key={idx} onClick={() => setEmotion(e)} style={{ transform: emotion === e ? "scale(1.5)" : "scale(1)" }}>{e}</button>
            ))}
          </div>

          <p style={{ marginTop: "1rem", color: "#4338ca" }}>Was hast du erlebt oder gedacht?</p>
          <textarea
            rows="4"
            placeholder="Schreibe hier deine Gedanken auf..."
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            style={{ width: "100%", marginTop: "0.5rem", padding: "0.5rem", borderRadius: "0.5rem" }}
          />
          <button onClick={() => alert("Dein Eintrag wurde gespeichert (lokal).")} style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            background: "#6366f1",
            color: "white",
            border: "none",
            borderRadius: "0.5rem"
          }}>
            Eintrag speichern
          </button>
        </div>
      )}
    </div>
  );
}
