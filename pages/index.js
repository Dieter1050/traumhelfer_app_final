
import Head from 'next/head';
import '../styles/globals.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mythische Traumhelfer</title>
      </Head>
      <h1>🎧 Mythische Traumhelfer</h1>

      <div className="block">
        <h2>🌀 Theseus & Minotaurus</h2>
        <audio controls>
          <source src="/theseus.mp3" type="audio/mpeg" />
          Dein Browser unterstützt das Audio-Element nicht.
        </audio>
      </div>

      <div className="block">
        <h2>🌬 Focusing-Übung</h2>
        <audio controls>
          <source src="/focusing.mp3" type="audio/mpeg" />
          Dein Browser unterstützt das Audio-Element nicht.
        </audio>
      </div>

      <div className="block">
        <h2>🎭 Fantasiereise zur Bühne</h2>
        <audio controls>
          <source src="/buehnenreise.mp3" type="audio/mpeg" />
          Dein Browser unterstützt das Audio-Element nicht.
        </audio>
      </div>
    </div>
  );
}
