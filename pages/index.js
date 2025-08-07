
import Head from 'next/head';
import '../styles/globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white p-6 font-sans">
      <Head>
        <title>Mythische Traumhelfer</title>
      </Head>
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-10">🎧 Mythische Traumhelfer</h1>

      <div className="max-w-2xl mx-auto space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-indigo-700">🌀 Theseus & Minotaurus</h2>
          <audio controls className="mt-2 w-full">
            <source src="/theseus.mp3" type="audio/mpeg" />
            Dein Browser unterstützt das Audio-Element nicht.
          </audio>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-700">🌬 Focusing-Übung</h2>
          <audio controls className="mt-2 w-full">
            <source src="/focusing.mp3" type="audio/mpeg" />
            Dein Browser unterstützt das Audio-Element nicht.
          </audio>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-700">🎭 Fantasiereise zur Bühne</h2>
          <audio controls className="mt-2 w-full">
            <source src="/buehnenreise.mp3" type="audio/mpeg" />
            Dein Browser unterstützt das Audio-Element nicht.
          </audio>
        </div>
      </div>
    </div>
  );
}
