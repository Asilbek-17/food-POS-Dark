import React from 'react'
import "./SettingItem.scss";
import { Link } from 'react-router-dom';

function SettingItem({ title, text,url, ...rest }) {
    const itemClassName = String(window.location).includes(url) ? "settings-item current" : "settings-item";
    const ItemTitleClassName = String(window.location).includes(url) ? "settings-title text-danger-100" : "settings-title text-light-100";
    return (
        <Link to={url} className={itemClassName} {...rest}>
            <h3 className={ItemTitleClassName} title={title}>
                {title}
            </h3>
            <p className="settings-text text-light-200" title={text}>
                {text}
            </p>
        </Link>
    )
}

export default SettingItem