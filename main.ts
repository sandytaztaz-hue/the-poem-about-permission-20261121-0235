import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem: string = [
  "You said go,",
  "slid across, left the wheel warm.",
  "I took it \u2014 your hands hovered,",
  "then let go.",
  "Now the road bends mine,",
  "and every turn still carries your name.",
].join("\n");

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
