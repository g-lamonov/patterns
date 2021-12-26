import { Approval } from "./Approval";
import { ApprovalRequest } from "./ApprovalRequest";

export class ViceSchoolManagerApproval extends Approval {
  constructor(name: string) {
    super(name);
  }

  reduceRequest(approvalRequest: ApprovalRequest) {
    if (
      5000 <= approvalRequest.getCost() &&
      approvalRequest.getCost() < 10000
    ) {
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
