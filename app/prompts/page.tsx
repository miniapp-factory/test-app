"use client";

import { PromptCard } from "@/components/prompt-card";
import { useState } from "react";

const prompts = [
  {
    title: "Write a poem about the moon",
    description: "Describe the moon's glow and its influence on the night.",
  },
  {
    title: "Create a short story about a lost key",
    description: "The key opens a mysterious door in an old attic.",
  },
  {
    title: "Draft a dialogue between a robot and a human",
    description: "Explore themes of identity and consciousness.",
  },
];

export default function PromptsPage() {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  const handleGenerate = (prompt: string) => {
    setSelectedPrompt(prompt);
  };

  return (
    <main className="flex flex-col gap-6 p-4">
      <h1 className="text-2xl font-bold">Creative Writing Prompts</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {prompts.map((p, idx) => (
          <PromptCard
            key={idx}
            title={p.title}
            description={p.description}
            onGenerate={() => handleGenerate(p.title)}
          />
        ))}
      </div>
      {selectedPrompt && (
        <div className="mt-6 p-4 bg-muted rounded-md">
          <h2 className="text-xl font-semibold mb-2">Your Prompt</h2>
          <p>{selectedPrompt}</p>
        </div>
      )}
    </main>
  );
}
