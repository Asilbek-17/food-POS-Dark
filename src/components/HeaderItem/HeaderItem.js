import React from 'react'

function HeaderItem({title = "", text=""}) {
    return (
        <div className='header-inner'>
            <h1 className="page-title text-light-100 mt-0 margin-bottom-0" title='Dashboard'>
                {title}
            </h1>
            {text ? <p className='page-date text-light-200 mt-0 margin-bottom-0'>{text}</p> : ""}
        </div>
    )
}

export default HeaderItem