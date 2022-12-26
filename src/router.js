import React from "react"

import Notfound from './notfound/Notfound'
import Profile from './about/Profile'
import { profile } from "./about/Profile"
import { visiMisi, Vision } from "./about/Vision"
import { pengurus, Pengurus } from "./about/Pengurus"
import { Legalitas, legalitas } from './about/Legalitas';
import { Program, program, loader } from './program/Program';
import Home from './Home';
import { Donasi, donasi } from './Donasi';
import { Article, article, articleLoader } from './article/Article';
import { App } from "./App"
import { Dokum, dokum, dokumLoader } from "./Dokum"
import { Kajian, kajian, kajianLoader } from "./kajian/Kajian"

export const routerData = [
    {
        path: "/",
        element: <App><Home /></App>,
        errorElement: <Notfound />,
    },
    {
        path: profile,
        element: <App><Profile /></App>
    },
    {
        path: visiMisi,
        element: <App><Vision /></App>
    },
    {
        path: pengurus,
        element: <App><Pengurus /></App>
    },
    {
        path: legalitas,
        element: <App><Legalitas /></App>
    },
    {
        path: program(":id"),
        element: <Program />,
        loader: loader,
        errorElement: <Notfound />,
    },
    {
        path: donasi,
        element: <App><Donasi /></App>
    },
    {
        path: article(":id"),
        element: <App><Article /></App>,
        loader: articleLoader,
        errorElement: <Notfound />,
    },
    {
        path: dokum,
        element: <App><Dokum /></App>,
        loader: dokumLoader,
    },
    {
        path: kajian(":id"),
        element: <App><Kajian /></App>,
        loader: kajianLoader,
    }
]