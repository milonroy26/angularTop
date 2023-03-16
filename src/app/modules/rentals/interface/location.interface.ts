export interface InDistrict{
    _id: string,
    name: string,
    isActive: boolean,
    date: string
}

export interface InArea{
    _id: string,
    name: string,
    districtId: string,
    districtName: string,
    date: string,
}

export interface InLocation{
    _id: string,
    name: string,
    districtName: string,
    districtId: string,
    areaName: string,
    areaId: string,
    date: string,
}