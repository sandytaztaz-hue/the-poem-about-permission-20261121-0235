import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Writes the poem entry for the "poem about permission" competition to
// entry.txt inside MAKEFUN_OUTPUT_DIR (default /output), with no trailing
// newline, so the file holds exactly the poem and nothing else.

const poem: string = [
  "You said go,",
  "slid across, left the wheel warm.",
  "I took it \u2014 your hands hovered,",
  "then let go.",
  "Now the road bends mine,",
  "and every turn still carries your name.",
].join("\n");

const rawOutDir: string | undefined = process.env.MAKEFUN_OUTPUT_DIR;
// Treat an empty or whitespace-only env value the same as unset, and drop
// any trailing slashes so the join below always gets a clean directory.
const outDir: string =
  rawOutDir !== undefined && rawOutDir.trim() !== ""
    ? rawOutDir.replace(/\/+$/, "") || "/"
    : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
