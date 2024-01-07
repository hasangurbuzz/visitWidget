import type {MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        {title: "Remix Visit widget"},
        {name: "description", content: "Visit Widget"},
    ];
};

export default function Index() {

    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}>
            <h1>Welcome to index page of visit widget</h1>
        </div>
    );
}
