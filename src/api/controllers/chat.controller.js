import OpenAI from "openai"
import { config } from "dotenv"

config()

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
;(async () => {
  const conversation = [
    {
      role: "system",
      content: "You are a helpful assistant that knows Omalya is my wife.",
    },
    { role: "user", content: "Who is my wife?" },
  ]

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: conversation,
  })

  const reply = response.choices[0].message.content
  console.log(reply)
})()
