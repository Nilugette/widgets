import React from 'react'

const Link = ({ className, href, children}) => {

    //Helper to change URL but don't do a full page refresh
    const onClick = (event) => {
        event.preventDefault()
        window.history.pushState({}, '', href)

        //The purpose of this code is to tell the dropdown component 
        //that url has just changed
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent) 
    }

    return <a onClick={onClick} className={className} href={href}>{children}</a>
}

export default Link