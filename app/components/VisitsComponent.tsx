import * as React from "react"


type Props = {
    content: string
}

const VisitsComponent = (props: Props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="75">
        <rect width="100%" height="100%" rx="10" ry="10">
            <animate attributeName="fill" dur="10s" values="red;orange;yellow;green;blue;indigo;violet;red"
                     repeatCount="indefinite"/>
        </rect>

        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontFamily="monospace"
              fill="white">
            {props.content}
        </text>
    </svg>

)
export default VisitsComponent
