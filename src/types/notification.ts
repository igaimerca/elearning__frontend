export interface Notification{
    id: number | string,
    from: string,
    title: string,
    message: string,
    date: string,
    read: boolean,
    type: string,
    time: string,
    file?: {
        name: string,
        url: string
        size: number
    }
}
