import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

function sleep(seconds: number) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

const keepAwake = async (url: string) => {
  console.log("starting keep awake...")
  while (true) {
    const start = +new Date()
    await axios.get(url)
    const end = +new Date()
    console.log("[SERVER]: " + url)
    console.log("[DELAY]: " + process.env.DELAY+ " seconds")
    console.log("[RESPONSE_TIME]:", (end-start)/1000, "seconds")
    console.log("keeping awake...")
    await sleep(Number(process.env.DELAY) || 20)
  }
}

keepAwake(process.env.URL || "")