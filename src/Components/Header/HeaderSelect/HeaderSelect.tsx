import React from 'react'

export function HeaderSelect() {
    const [isActive, setIsActive] = React.useState(false)
    function openSelect() {
        setIsActive(true)
    }
    return(
        <div className="header__select">
            <div className="header__select-btn" onClick={(e) => setIsActive(!isActive)}>RUB</div>
            { isActive &&
            <div className="header__select-content">
                <div className="header__select-item">AED</div>
                <div className="header__select-item">RUB</div>
                <div className="header__select-item">ALL</div>
                <div className="header__select-item">AMD</div>
            </div>
}
        </div>
    )
}