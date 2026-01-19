export interface CountryList{
    name: {
        common: string
    },
    flags: {
        png: string
    },
    capital?:string[],
    region:string,
    population:number,
    cca3:number,
}