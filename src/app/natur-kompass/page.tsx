
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Leaf,
  RotateCcw,
} from "lucide-react";

type Category = "ruhe" | "klarheit" | "wachstum" | "natur";

type Option = {
  label: string;
  category: Category;
};

const questions: { title: string; options: Option[] }[] = [
  {
    title: "Wie fühlst du dich momentan?",
    options: [
      { label: "Ich brauche mehr Ruhe.", category: "ruhe" },
      { label: "Ich suche Orientierung.", category: "klarheit" },
      { label: "Ich möchte mich weiterentwickeln.", category: "wachstum" },
      { label: "Ich möchte mich wieder mit der Natur verbinden.", category: "natur" },
    ],
  },
  {
    title: "Was fehlt dir gerade am meisten?",
    options: [
      { label: "Zeit für mich selbst.", category: "ruhe" },
      { label: "Klarheit bei Entscheidungen.", category: "klarheit" },
      { label: "Neue Erfahrungen.", category: "wachstum" },
      { label: "Zeit draussen.", category: "natur" },
    ],
  },
  {
    title: "Was würde dir besonders guttun?",
    options: [
      { label: "Entspannung und Achtsamkeit.", category: "ruhe" },
      { label: "Ein persönliches Gespräch.", category: "klarheit" },
      { label: "Austausch mit anderen.", category: "wachstum" },
      { label: "Ein Naturerlebnis.", category: "natur" },
    ],
  },
  {
    title: "Was möchtest du verändern?",
    options: [
      { label: "Weniger Stress im Alltag.", category: "ruhe" },
      { label: "Meinen eigenen Weg erkennen.", category: "klarheit" },
      { label: "Mehr Selbstvertrauen entwickeln.", category: "wachstum" },
      { label: "Bewusster und natürlicher leben.", category: "natur" },
    ],
  },
  {
    title: "Was spricht dich spontan an?",
    options: [
      { label: "Meditation und Stille.", category: "ruhe" },
      { label: "Coaching und Reflexion.", category: "klarheit" },
      { label: "Gemeinsames Lernen.", category: "wachstum" },
      { label: "Wald, Wiesen und Berge.", category: "natur" },
    ],
  },
  {
    title: "Was wünschst du dir für die nächste Zeit?",
    options: [
      { label: "Innere Balance.", category: "ruhe" },
      { label: "Eine klare Richtung.", category: "klarheit" },
      { label: "Persönliches Wachstum.", category: "wachstum" },
      { label: "Mehr Naturverbundenheit.", category: "natur" },
    ],
  },
];

const results: Record<
  Category,
  {
    title: string;
    description: string;
    impulse: string;
    recommendation: string;
    href: string;
  }
> = {
  ruhe: {
    title: "Dein Weg führt zur inneren Ruhe",
    description:
      "Du wünschst dir mehr Gelassenheit und bewusste Momente für dich selbst.",
    impulse:
      "Nimm dir heute fünf Minuten Zeit. Atme bewusst und beobachte, was um dich herum geschieht.",
    recommendation: "Achtsamkeit und Einzelcoaching",
    href: "/coaching",
  },
  klarheit: {
    title: "Dein Weg führt zu mehr Klarheit",
    description:
      "Du möchtest deinen eigenen Weg besser erkennen und Entscheidungen bewusster treffen.",
    impulse:
      "Schreibe drei Dinge auf, die dir im Leben besonders wichtig sind.",
    recommendation: "Persönliches Einzelcoaching",
    href: "/coaching",
  },
  wachstum: {
    title: "Dein Weg führt zum Wachstum",
    description:
      "Du bist bereit, neue Perspektiven zu entdecken und dich persönlich weiterzuentwickeln.",
    impulse:
      "Überlege dir, welchen kleinen Schritt du heute in Richtung deines Ziels machen kannst.",
    recommendation: "Gruppencoaching und Community",
    href: "/coaching",
  },
  natur: {
    title: "Dein Weg führt zurück zur Natur",
    description:
      "Du suchst Verbindung, Natürlichkeit und neue Kraft durch bewusste Naturerlebnisse.",
    impulse:
      "Gehe heute bewusst nach draussen und entdecke drei Dinge, die du sonst übersiehst.",
    recommendation: "Naturworkshops",
    href: "/workshops",
  },
};

export default function NaturKompassPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Category[]>([]);

  const finished = step >= questions.length;

  function choose(category: Category) {
    const updated = [...answers];
    updated[step] = category;
    setAnswers(updated);
  }

  function restart() {
    setStep(0);
    setAnswers([]);
  }

  const scores: Record<Category, number> = {
    ruhe: 0,
    klarheit: 0,
    wachstum: 0,
    natur: 0,
  };

  answers.forEach((answer) => {
    scores[answer]++;
  });

  const winner = (
    Object.keys(scores) as Category[]
  ).reduce((best, category) =>
    scores[category] > scores[best] ? category : best
  );

  const result = results[winner];

  return (
    <main className="min-h-screen bg-[#e7ecdf] py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <Compass
            size={48}
            className="mx-auto text-[#647b5e] mb-4"
          />

          <p className="uppercase tracking-[0.25em] text-xs text-[#647b5e]">
            Runa Natura
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold mt-3 text-[#263c30]">
            Dein Natur-Kompass
          </h1>

          <p className="mt-4 text-[#526456]">
            Entdecke, was dir gerade guttun könnte.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
          {!finished ? (
            <>
              <div className="flex justify-between text-sm text-[#647b5e] mb-3">
                <span>
                  Frage {step + 1} von {questions.length}
                </span>
                <span>
                  {Math.round(
                    (step / questions.length) * 100
                  )}
                  %
                </span>
              </div>

              <div className="h-2 bg-[#e7ecdf] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#647b5e] transition-all duration-300"
                  style={{
                    width: `${
                      (step / questions.length) * 100
                    }%`,
                  }}
                />
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-7 text-[#263c30]">
                {questions[step].title}
              </h2>

              <div className="space-y-3">
                {questions[step].options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => choose(option.category)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition ${
                      answers[step] === option.category
                        ? "border-[#647b5e] bg-[#e7ecdf]"
                        : "border-[#e3e8df] hover:border-[#647b5e]"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="flex justify-between gap-3 mt-9">
                <button
                  type="button"
                  onClick={() =>
                    setStep((current) =>
                      Math.max(0, current - 1)
                    )
                  }
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 px-4 py-3 disabled:opacity-30 text-[#263c30]"
                >
                  <ArrowLeft size={18} />
                  Zurück
                </button>

                <button
                  type="button"
                  disabled={!answers[step]}
                  onClick={() =>
                    setStep((current) => current + 1)
                  }
                  className="inline-flex items-center gap-2 bg-[#647b5e] text-white px-6 py-3 rounded-xl disabled:opacity-40 hover:bg-[#4d6348]"
                >
                  {step === questions.length - 1
                    ? "Ergebnis"
                    : "Weiter"}
                  <ArrowRight size={18} />
                </button>
              </div>
            </>
          ) : (
            <div className="text-center">
              <Leaf
                size={52}
                className="mx-auto text-[#647b5e]"
              />

              <p className="text-xs tracking-widest uppercase mt-6 text-[#647b5e]">
                Dein persönlicher Naturimpuls
              </p>

              <h2 className="text-3xl font-semibold mt-4 text-[#263c30]">
                {result.title}
              </h2>

              <p className="mt-6 leading-8 text-[#526456]">
                {result.description}
              </p>

              <div className="bg-[#e7ecdf] rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-[#263c30]">
                  Dein Impuls für heute
                </h3>

                <p className="mt-3 text-[#526456]">
                  {result.impulse}
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-9 text-[#263c30]">
                Das könnte zu dir passen
              </h3>

              <p className="mt-2 text-[#526456]">
                {result.recommendation}
              </p>

              <Link
                href={result.href}
                className="inline-flex items-center gap-2 mt-6 bg-[#647b5e] text-white px-7 py-4 rounded-xl hover:bg-[#4d6348]"
              >
                Angebot entdecken
                <ArrowRight size={18} />
              </Link>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex items-center gap-2 text-[#647b5e]"
                >
                  <RotateCcw size={17} />
                  Kompass erneut starten
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-8">
                Dieser Kompass dient der persönlichen
                Reflexion und ersetzt keine
                professionelle psychologische Beratung.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
