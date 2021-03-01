// Anytime we set up any event listener inside of a component
// it's usually a sign that we have to define a useState hook
import { useState, useEffect } from 'react'

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChange)

        //To clean up this event Listener :
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])

    return currentPath === path ? children : null

}

export default Route