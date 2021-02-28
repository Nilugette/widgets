import React, { useState } from 'react'



const Accordion = ( { items }) => {
    // The array distructuring [activeIndex, setActiveIndex] is identical to object distructuring, it's a short cut to get access to some elements inside an array
    // Whenever we call useState we get back an array with 2 elements that we 
    // useState is a Hook : it gives access to the state system inside a functinal component
    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClick = (index) =>  {
        setActiveIndex(index)
    }
    const rederedItems = items.map((item, index)=> {
        const active = index === activeIndex ? 'active': ''

        return (
            <React.Fragment key={item.title}>
                <div 
                  className= {`title ${active}`}
                  onClick={() => onTitleClick(index)}
                > 
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
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