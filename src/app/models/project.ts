export interface IProject {
    id: number,
    title: string,
    description: string,
    creationDate: string,
    modificationDate: string,
    manager: IManager
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
export interface ITask {
    id: number,
    title: string,
    description: string,
    status: string,
    creationDate: string,
    modificationDate: string,
    project: IProject,
    employee: IEmployee

}
export interface ITasks {
    pageNumber: number,
    pageSize: number,
    data: ITask[],
    totalNumberOfRecords: number,
    totalNumberOfPages: number
}
export interface IAddEditTask {
    title: string,
    description: string,
    projectId: number,
    employeeId: number
}

export interface IEmployee {
    id: number,
    userName: string,
    isActivated: string,
}
