import { Approval } from "./Approval";
import { ApprovalRequest } from "./ApprovalRequest";

export class SchoolManagerApproval extends Approval {
  constructor(name: string) {
    super(name);
  }

  reduceRequest(approvalRequest: ApprovalRequest) {
    if (10000 <= approvalRequest.getCost()) {
      console.log(
        `Request amount ${approvalRequest.getCost()} was processed by ${
          this.name
        }`
      );
    } else {
      this.approval.reduceRequest(approvalRequest);
    }
  }
}
