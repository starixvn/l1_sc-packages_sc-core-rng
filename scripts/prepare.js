import { mkdir } from "node:fs/promises";
import { join } from "node:path";

// Ensure reports directory exists
await mkdir(join(process.cwd(), "reports"), { recursive: true });
