

export type StreetType = {
    title: string
}


export type AddressType = {
    number: number,
    street: StreetType
}

export type HouseType = {
    builtAt: number,
    repaired: false,
    address: AddressType,


}
export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: Array<GonvermentBuildingType>,
    citizenNumbers: number
}
export type GonvermentBuildingType = {
    type: "HOSPITAL" | "FIRESTATION"
    budget: number
    staffCount: number
    address: AddressType
}