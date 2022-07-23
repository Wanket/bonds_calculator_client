import { setupWorker } from "msw";
import search from "@/api/mock/search";

const handlers = [search];

export const worker = setupWorker(...handlers);
