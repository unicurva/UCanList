export class AppCore {
    id: number;
    title: string;
    navigation: AppNav[];
    constructor(id: number, title: string, navigation: AppNav[]) {
        this.id = id;
        this.title = title;
        this.navigation = navigation;
    }
}
export class AppNav {
    id: number;
    name: string;
    path: string;
    component: string;
    useAsDefault: boolean;
    children: AppNav[];
    constructor(id: number, name: string, path: string, component: string,
                useAsDefault: boolean, children: AppNav[]) {
        this.id = id;
        this.name = name;
        this.path = path;
        this.component = component;
        this.useAsDefault = useAsDefault;
        this.children = children;
    }
}
