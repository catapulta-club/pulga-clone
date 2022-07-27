import { IScooter } from "../../types/geo";

export interface IScooterItemProps {
    item: IScooter;
    idSelected?: number;
    onSelect: (id: number) => void;
}

export interface ISeletedProps {
    isSelected?: boolean;
}

export interface IBatteryProps {
    battery: number;
}