import React, { memo, ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    id: string
    children: ReactNode
}

const Portal: React.FC<PortalProps> = ({ id, children }) => {
    const element = useRef(document.querySelector(`#${id}`) || document.createElement('div'))
    const [ dynamic ] = useState(!element.current.parentElement)

    useEffect(() => {
        const { current: htmlElement } = element

        if(dynamic){
            element.current.id = id

            document.body.appendChild(element.current)
        }

        return () => {
            if(dynamic && htmlElement.parentElement){
                htmlElement.parentElement.removeChild(htmlElement)
            }
        }
    }, [ dynamic, id ])

    return createPortal(children, element.current)
}

export default memo(Portal)