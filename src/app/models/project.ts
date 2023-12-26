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
export interface ITable {
    pageNumber: number,
    pageSize: number,
    totalNumberOfPages:number,
    totalNumberOfRecords:number
    data:IEmployee
}

export interface IEmployee {
    id: number,
    userName: string,
    isActivated: string,
    phoneNumber:number,
    email:string,
    creationDate:string,
    group:IGroup
}
export interface IGroup {
    id: number,
    name: string,
    creationDate:string,
    modificationDate:string,
}


export interface IEProject {
    id: number,
    title: string,
    description: string,
    creationDate: string,
    modificationDate: string,
    task: ITask[]
}
export interface IEProjects {
    pageNumber: number,
    pageSize: number,
    data: IEProject[],
    totalNumberOfRecords: number,
    totalNumberOfPages: number
}
