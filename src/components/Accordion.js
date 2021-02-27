import React from 'react'

const Accordion = ( { items }) => {
    const rederedItems = items.map(item => {
        return (
            <React.Fragment key={item.title}>
                <div className="title active"> 
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="title active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return (
        <div className="ui styled accordion"> 
             {rederedItems} 
        </div>
    )
}

export default Accordion