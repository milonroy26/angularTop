export interface IDistrict {
    _id: string;
    name: string;
    isActive: boolean;
    date: string;
}

export interface IArea {
    _id: string;
    name: string;
    districtId: string;
    districtName: string;
    date: string;
}

export interface ILocation {
    _id: string;
    name: string;
    districtName: string;
    districtId: string;
    areaName: string;
    areaId: string;
    date: string;
}