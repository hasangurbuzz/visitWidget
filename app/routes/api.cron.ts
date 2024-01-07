import {LoaderFunctionArgs} from "@remix-run/node";
import {reset} from "../../lib/redis";

export async function loader({
                                 request
                             }: LoaderFunctionArgs) {
    if (request.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
        return new Response("Unauthorized", {status: 401})
    }

    await reset()
    return "OK"
}