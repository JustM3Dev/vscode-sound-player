import React, { ReactElement } from 'react'

type Props = {
    message: string
}

export default function Error({
    message,
}: Readonly<Props>): ReactElement {
    return <span>{`Audio parsing error:${message}`}</span>
}
