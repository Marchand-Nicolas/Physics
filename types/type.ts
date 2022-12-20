export default interface Type {
    color: string
    mass: number
    friction: number
    restitution: number
    sameTypeAttractionMultiplier: number
    differentTypeAttractionMultiplier: number
}

export interface TypeDictionary {
    [key: string]: any;
}