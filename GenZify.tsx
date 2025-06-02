"use client";

import React, { useState } from "react";

const slangDictionaries = {
  GenZ: {
    "hello": "yo",
    "how are you": "sup? u good?",
    "friend": "bro",
    "cool": "lit",
    "good": "gucci",
  },
  Millennial: {
    "hello": "hey there",
    "how are you": "how’s it going?",
    "friend": "mate",
    "cool": "rad",
    "good": "solid",
  },
  Boomer: {
    "hello": "Greetings",
    "how are you": "How do you do?",
    "friend": "pal",
    "cool": "groovy",
    "good": "splendid",
  },
};

export default function GenZify() {
  const [input, setInput] = useState("");
  const [translation, setTranslation] = useState({ GenZ: "", Millennial: "", Boomer: "" });

  const translate = (text: string) => {
    const lowerText = text.toLowerCase();

    const newTranslation = {
      GenZ: slangDictionaries.GenZ[lowerText] || "undefined",
      Millennial: slangDictionaries.Millennial[lowerText] || "undefined",
      Boomer: slangDictionaries.Boomer[lowerText] || "undefined",
    };

    setTranslation(newTranslation);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);
    translate(val);
  };

  return (
    <section className="max-w-md mx-auto p-4 bg-gray-900 rounded-lg text-white mt-6">
      <h2 className="text-xl font-bold mb-4">GenZify Anything</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type something to translate..."
        className="w-full p-2 rounded-md text-black"
      />
      <div className="mt-4 space-y-2">
        <p><strong>Gen Z:</strong> {translation.GenZ}</p>
        <p><strong>Millennial:</strong> {translation.Millennial}</p>
        <p><strong>Boomer:</strong> {translation.Boomer}</p>
      </div>
      <footer className="mt-6 text-xs opacity-50 text-center">
        MADE WITH ❤️ BY KANAK & MANYA,<br />
        CLONE THE PROJECT ON GITHUB
      </footer>
    </section>
  );
}

