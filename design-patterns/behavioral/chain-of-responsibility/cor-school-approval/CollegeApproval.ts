import { Approval } from "./Approval";
import { ApprovalRequest } from "./ApprovalRequest";

export class CollegeApproval extends Approval {
  constructor(name: string) {
    super(name);
  }

  reduceRequest(approvalRequest: ApprovalRequest) {
    if (3000 <= approvalRequest.getCost() && approvalRequest.getCost() < 5000) {
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
