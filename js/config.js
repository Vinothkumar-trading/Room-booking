// 1. SharePoint Lists

export const LISTS = {
    REQUESTS: "Accommodation Requests",
    ROOMS: "Room Master"
};

// 2. SharePoint Column Names

export const REQUEST_COLUMNS = {
    REQUEST_ID: "RequestID",
    REQUEST_DATE: "RequestDate",
    PR_NUMBER: "PRNumber",
    REQUESTER: "Requester",
    DEPARTMENT: "Department",
    ACTIVITY: "Activity",
    CHECKIN: "RequestedCheckIn",
    CHECKOUT: "RequestedCheckOut",
    OCCUPANCY_COUNT: "OccupancyCount",
    OCCUPANCY_TYPE: "OccupancyType",
    REMARKS: "Remarks",
    APPROVAL_STAGE: "ApprovalStage",
    APPROVAL_DATE: "ApprovalDate",
    RESCHEDULED_CHECKIN: "RescheduledCheckIn",
    RESCHEDULED_CHECKOUT: "RescheduledCheckOut"
};


export const ROOM_COLUMNS = {
    ROOM_NO: "RoomNo",
    CAPACITY: "Capacity",
    OCCUPANCY_TYPE: "OccupancyType",
    STATUS: "Status"
};

// 3. Choice Values

export const STATUS = {
    SUBMITTED: "Submitted",
    PENDING: "Pending HR",
    APPROVED: "Approved",
    REJECTED: "Rejected",
    COMPLETED: "Completed"
};

export const ROOM_STATUS = {
    AVAILABLE: "Available",
    OCCUPIED: "Occupied",
    MAINTENANCE: "Maintenance"
};

export const OCCUPANCY = {
    SINGLE: "Single",
    TWIN: "Twin",
    DORMITORY: "Dormitory"
};

// 4. Application Settings

export const REQUEST_SETTINGS = {

    PREFIX: "REQ",

    MAX_OCCUPANCY: 20,

    DATE_FORMAT: "DD-MMM-YYYY"

};

export const ROOM_SETTINGS = {

    DEFAULT_STATUS: ROOM_STATUS.AVAILABLE

};

// 5. API Endpoints (Comming soon...)


