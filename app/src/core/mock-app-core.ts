import { AppCore, AppNav } from './app-core';

var NAVIGATION: AppNav[] = [
    new AppNav(1, "Home", "", "", true, null),
    new AppNav(2, "Page 1", "", "", false, null),
    new AppNav(3, "Page 2", "", "", false, null),
    new AppNav(4, "Page 3", "", "", false, null),
    new AppNav(5, "Page 4", "", "", false, null)
];

export var CORE: AppCore = new AppCore(1, "Mayuri Bolla", NAVIGATION);