export default interface IEmployeListState{
    FullName?: string;
    IsActive: boolean;
    LastName: string;
    FirstName: string;
    Project?: string;
    MobilePhone: string;
    EmployeeID: string;
    EnterpriseID: string;
    AvanadeUserID: string;
    PersonalEmail: string;
    Address: string;
    BirthDate: Date;
    WeddgingAnniversary?:Date;
    EmergencyContactName?: string;
    EmergencyContact?: string;
    Role?: string;
    BillCode?:string;
    ResourceLevel:string;
    RollOnDate?:Date;
    RollOffDate?:Date;
    ServiceTag?:string;
    LockNo?:string;
    ResourceBadge?:string;
    Comments?:string;
    IsCompliant?: boolean;
}   