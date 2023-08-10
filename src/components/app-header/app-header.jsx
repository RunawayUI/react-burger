import React from "react";

import { Logo, Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import stylesHeader from "./app-header.module.css"

const AppHeader = () => {
    return (
        <header className={`${stylesHeader.header} pt-4 pb-4`}>
            <div className={stylesHeader.wrapper}>
                <nav className={stylesHeader.nav}>
                    <ul>
                        <li className="header__link text_type_main-default">
                            <BurgerIcon type="primary" />
                            Конструктор
                        </li>
                        <li className="header__link text_type_main-default">
                            <ListIcon type="primary" />
                            Лента заказов
                        </li>
                    </ul>
                </nav>
                <div className={stylesHeader.header__item}><Logo /></div>
                <div className={stylesHeader.header__item}>
                    <a href="" className="header__link text_type_main-default">
                        <ProfileIcon type="primary" />
                        Личный кабинет
                    </a>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;