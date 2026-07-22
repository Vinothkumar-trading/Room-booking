import { LISTS } from "./config.js";

class SharePointService {

    constructor() {

        this.baseUrl = window.location.origin;

        this.listItemEntityType = "";

    }

    async initialize() {

        const response = await fetch(

        `${this.baseUrl}/_api/web/lists/GetByTitle('${LISTS.REQUESTS}')?$select=ListItemEntityTypeFullName`,

        {

            headers: {

                Accept: "application/json;odata=verbose"

            }

        }

    );

    const data = await response.json();

    this.listItemEntityType =
        data.d.ListItemEntityTypeFullName;

    console.log(this.listItemEntityType);

    }

    

    async getRequestDigest() {

        const response = await fetch(`${this.baseUrl}/_api/contextinfo`, {

            method: "POST",

            headers: {
                "Accept": "application/json;odata=verbose"
            }

        });

        const data = await response.json();

        return data.d.GetContextWebInformation.FormDigestValue;

    }

    async createRequest(request) {

        const digest = await this.getRequestDigest();

        const payload = this.buildPayload(request);

        const response = await fetch(

    `${this.baseUrl}/_api/web/lists/GetByTitle('${LISTS.REQUESTS}')/items`,

    {

        method: "POST",

        headers: {

            "Accept": "application/json;odata=verbose",

            "Content-Type": "application/json;odata=verbose",

            "X-RequestDigest": digest

        },

        body: JSON.stringify(payload)

    }

    );

    if (!response.ok) {

        const error = await response.text();

        throw new Error(error);

    }

    const result = await response.json();

    console.log(result);

    return result;
        
    console.log(digest);

    }

    buildPayload(request) {

        return {

            RequestID: request.requestId,

            PRNumber: request.prNumber,

            Requester: request.requester,

            Department: request.department,

            Activity: request.activity,

            RequestedCheckIn: request.checkIn,

            RequestedCheckOut: request.checkOut,

            OccupancyCount: request.occupancyCount,

            OccupancyType: request.occupancyType,

            Remarks: request.remarks,

            ApprovalStage: request.status

        };

    }

}



