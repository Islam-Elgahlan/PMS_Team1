export interface IProject {
    id: number,
    title: string,
    description: string,
    creationDate: string,
    modificationDate: string,
    manager:IManager

}
export interface IProjects {
    pageNumber: number,
    pageSize: number,
    data: IProject[],
    totalNumberOfRecords: number,
    totalNumberOfPages: number
}
export interface IManager {
    id: number,
    userName: string,
    imagePath: string,
    email: string,
    password: string,
    country: string,
    phoneNumber: number,
    verificationCode: string,
    isVerified: boolean,
    isActivated: boolean,
    creationDate: string,
    modificationDate: string
}