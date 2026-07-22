import { SharePoint } from "./sharepoint.js";

await SharePoint.initialize();

await SharePoint.createRequest(formData);

export const SharePoint = new SharePointService();