// Fictional identity card drawn in SVG. No real person, photo or document is represented.
const FIELDS = [
  { label: "NAME", value: "ALEX MORGAN", token: "[PERSON]", y: 96 },
  { label: "DATE OF BIRTH", value: "01 JAN 1990", token: "[DOB]", y: 136 },
  { label: "ID NUMBER", value: "DEMO-4821-9036", token: "[ID]", y: 176 },
  { label: "ADDRESS", value: "123 Sample St, Exampleville", token: "[ADDRESS]", y: 216 },
];

export default function SampleIdCard({ protectedView }: { protectedView: boolean }) {
  return (
    <svg viewBox="0 0 480 280" className="block h-full w-full" role="img" aria-label={protectedView ? "Sample ID card with sensitive fields masked" : "Sample ID card with fictional personal details"}>
      <rect width="480" height="280" fill="#f4efe4" />
      <rect width="480" height="44" fill="#2b2418" />
      <text x="24" y="28" fill="#f8d58b" fontSize="14" fontWeight="700" letterSpacing="2" fontFamily="ui-sans-serif, system-ui, sans-serif">SAMPLE IDENTITY CARD</text>
      <text x="456" y="28" fill="#b4aa98" fontSize="9" textAnchor="end" letterSpacing="1.5" fontFamily="ui-sans-serif, system-ui, sans-serif">SYNTHETIC — NOT VALID</text>

      {protectedView ? (
        <g>
          <rect x="24" y="68" width="112" height="148" fill="#2b2418" />
          {Array.from({ length: 7 * 9 }).map((_, i) => {
            const col = i % 7;
            const row = Math.floor(i / 7);
            const shade = 28 + ((col * 37 + row * 53) % 38);
            return <rect key={i} x={24 + col * 16} y={68 + row * 16.4} width="16" height="16.4" fill={`hsl(38 22% ${shade}%)`} />;
          })}
        </g>
      ) : (
        <g>
          <rect x="24" y="68" width="112" height="148" fill="#d9cfb8" />
          <circle cx="80" cy="120" r="26" fill="#a99b7c" />
          <path d="M34 216c0-34 20-52 46-52s46 18 46 52z" fill="#a99b7c" />
        </g>
      )}

      {FIELDS.map(({ label, value, token, y }) => (
        <g key={label}>
          <text x="160" y={y - 12} fill="#7a6e58" fontSize="9" letterSpacing="1.5" fontFamily="ui-sans-serif, system-ui, sans-serif">{label}</text>
          {protectedView ? (
            <g>
              <rect x="160" y={y - 6} width={label === "ADDRESS" ? 290 : 190} height="22" rx="3" fill="#15110c" />
              <text x="170" y={y + 10} fill="#f5b83d" fontSize="12" fontFamily="ui-monospace, monospace">{token}</text>
            </g>
          ) : (
            <text x="160" y={y + 10} fill="#211708" fontSize={label === "ADDRESS" ? 15 : 18} fontWeight="600" fontFamily="ui-sans-serif, system-ui, sans-serif">{value}</text>
          )}
        </g>
      ))}
    </svg>
  );
}
