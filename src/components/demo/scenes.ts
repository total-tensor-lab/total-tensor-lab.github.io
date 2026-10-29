// All demo content is synthetic. Names, numbers and addresses are fictional placeholders.

export type Entity = { type: string; token: string; action: string; confidence: number };
export type Segment = { text: string; entity?: number };
export type TranscriptScene = { segments: Segment[]; entities: Entity[] };

export const TEXT_SCENE: TranscriptScene = {
  segments: [
    { text: "Hi, I'm " },
    { text: "Alex Morgan", entity: 0 },
    { text: ". You can reach me at " },
    { text: "alex@example.com", entity: 1 },
    { text: ". My account is " },
    { text: "DEMO-4821-9036", entity: 2 },
    { text: " — what is the status of my order?" },
  ],
  entities: [
    { type: "PERSON", token: "[PERSON]", action: "Tokenized", confidence: 99 },
    { type: "EMAIL", token: "[EMAIL]", action: "Tokenized", confidence: 99 },
    { type: "ACCOUNT_ID", token: "[ACCOUNT]", action: "Tokenized", confidence: 97 },
  ],
};

export const AUDIO_SCENE: TranscriptScene = {
  segments: [
    { text: "Hello, this is " },
    { text: "Jamie Rivera", entity: 0 },
    { text: ". My number is " },
    { text: "555-0142", entity: 1 },
    { text: " and my policy is " },
    { text: "DEMO-7710", entity: 2 },
    { text: ". I'd like to update my billing address." },
  ],
  entities: [
    { type: "PERSON", token: "[PERSON]", action: "Muted", confidence: 98 },
    { type: "PHONE", token: "[PHONE]", action: "Muted", confidence: 96 },
    { type: "POLICY_ID", token: "[POLICY]", action: "Muted", confidence: 95 },
  ],
};

export const IMAGE_ENTITIES: Entity[] = [
  { type: "FACE", token: "", action: "Pixelated", confidence: 99 },
  { type: "PERSON", token: "[PERSON]", action: "Masked", confidence: 98 },
  { type: "DATE_OF_BIRTH", token: "[DOB]", action: "Masked", confidence: 96 },
  { type: "ID_NUMBER", token: "[ID]", action: "Masked", confidence: 97 },
  { type: "ADDRESS", token: "[ADDRESS]", action: "Masked", confidence: 94 },
];

// Deterministic waveform: each bar is assigned to a transcript segment by character weight,
// so flagged words line up with the bars that represent them.
export const WAVE_BARS = (() => {
  const count = 56;
  const total = AUDIO_SCENE.segments.reduce((sum, segment) => sum + segment.text.length, 0);
  const bars: { height: number; entity?: number }[] = [];
  for (let i = 0; i < count; i++) {
    const position = ((i + 0.5) / count) * total;
    let cursor = 0;
    let entity: number | undefined;
    for (const segment of AUDIO_SCENE.segments) {
      cursor += segment.text.length;
      if (position <= cursor) { entity = segment.entity; break; }
    }
    const height = 0.3 + 0.7 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.55));
    bars.push({ height, entity });
  }
  return bars;
})();
