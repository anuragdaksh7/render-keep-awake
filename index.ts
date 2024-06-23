import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

const urls = [
  "https://post-dump-x9u9.onrender.com",
  "https://picstone-generative-ai.onrender.com",
  "https://eventhive.onrender.com",
  "https://travel-buddy-hb19.onrender.com",
  "https://gemini-remote-server.onrender.com"
]


function sleep(seconds: number) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

const keepAwake: Function = async (urls: string[]): Promise<void> => {
  console.log("starting keep awake...")
  while (true) {
    for (const url of urls) {
      const start: number = +new Date()
      axios.get(url)
      const end: number = +new Date()
      console.log("[SERVER]: " + url)
      console.log("[DELAY]: " + process.env.DELAY+ " seconds")
      console.log("[RESPONSE_TIME]:", (end-start)/1000, "seconds")
      console.log("keeping awake...")
    }
    await sleep(Number(process.env.DELAY) || 20)
  }
}

keepAwake(urls)