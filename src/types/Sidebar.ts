export interface ISidebarSubItems {
    title: string;
    pathname: string;
    primaryColor: string;
    pathParams?:{
        id?: string
    },
}
export interface SidebarItem {
    title: string;
    icon?: unknown;
    children?: Array<SidebarItem>;
    path: string;
    options?: {
        hasChildren?:boolean;
        children: Array<ISidebarSubItems>
    }
}
