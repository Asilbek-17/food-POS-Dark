import React from 'react'
import "./SettingItem.scss";

function SettingItem({ title, text, isActive, ...rest }) {
    const itemClassName = isActive ? "settings-item current" : "settings-item";
    const ItemTitleClassName = isActive ? "settings-title text-danger-100" : "settings-title text-light-100";
    return (
        <li className={itemClassName} {...rest}>
            <h3 className={ItemTitleClassName} title={title}>
                {title}
            </h3>
            <p className="settings-text text-light-200" title={text}>
                {text}
            </p>
        </li>
    )
}

export default SettingItem