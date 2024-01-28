import OpenAI from "openai";

import { config } from "dotenv";

config();

console.log(process.env.OPENAI_API_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "What is your vesion" }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();