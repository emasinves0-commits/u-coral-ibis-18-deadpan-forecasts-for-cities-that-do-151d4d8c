// Deadpan Forecasts for Cities That Do Not Exist — make.fun bounty entry.
//
// The program writes one forecast line to /output/entry.txt. It is fully
// deterministic: no network, no arguments, no randomness, no clock. The
// forecast itself lives in FORECAST below; everything else is the gate the
// sealed scorer will apply (UTF-8 text, 1 to 160 characters, one line).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_DIR = process.env.ENTRY_OUTPUT_DIR ?? "/output";
const OUT_PATH = `${OUT_DIR}/entry.txt`;

// In Marns the instrument, not the weather, is the story: a radar on
// grievance leave, and a high temperature that is openly a courtesy.
const FORECAST =
  "In Marns, the radar has filed a grievance and will not update until Thursday, so today's high of 74 stands as a courtesy figure.";

function gate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 160) {
    throw new Error(`forecast is ${chars.length} chars, must be 1-160`);
  }
  if (text.trim().length === 0) {
    throw new Error("forecast is only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("forecast must be exactly one line");
  }
  for (const ch of text) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      throw new Error(`control character U+${ch.charCodeAt(0).toString(16)} in forecast`);
    }
  }
}

gate(FORECAST);
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_PATH, FORECAST, "utf8");
verifyWritten(OUT_PATH, FORECAST);
console.log(
  `ok: wrote ${[...FORECAST].length} chars (${Buffer.byteLength(FORECAST, "utf8")} bytes) to ${OUT_PATH}`,
);

// Read the file back and demand byte equality: what the gate scores must
// be exactly what this program wrote, nothing more.
function verifyWritten(path: string, expectedText: string): void {
  const written = readFileSync(path);
  if (!written.equals(Buffer.from(expectedText, "utf8"))) {
    throw new Error("read-back mismatch: entry.txt differs from forecast");
  }
}
