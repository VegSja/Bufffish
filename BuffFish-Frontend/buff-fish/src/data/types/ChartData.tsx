export interface ChartData {
    id: string;
    color?: string;
    data: Coordinates[];
}

export interface Coordinates {
    x: number | string;
    y: number;
}
