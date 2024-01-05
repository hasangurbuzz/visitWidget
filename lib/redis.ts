import {Redis} from "@upstash/redis";

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!
})

const set = async (key: string, value: number) => {
    const result = await redis.set(key, value)
    if (result != "OK"){
        throw new Error("Error happened")
    }
}

const get = async (key: string) : Promise<number | null> => {
    return await redis.get(key)
}

export {redis, set, get}