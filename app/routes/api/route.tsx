import {renderToString} from "react-dom/server";
import VisitsComponent from "../../components/VisitsComponent";
import {LoaderFunctionArgs} from "@remix-run/node";
import {exportParams} from "../../../lib/util";
import {get, set} from "../../../lib/redis";

export async function loader({
                                 request,
                             }: LoaderFunctionArgs) {
    const params = exportParams(request);
    const { username, content } = params;

    const count = await get(username) || 0;
    await set(username, count + 1);

    const component = renderToString(
        <VisitsComponent content={`${content}: ${count}`} />
    );

    const response = new Response(component, {
        headers: {
            "Content-Type": "image/svg+xml",
        },
    });

    return response;
}
