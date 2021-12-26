import { Approval } from "./Approval";
import { ApprovalRequest } from "./ApprovalRequest";

export class DepartmentApproval extends Approval {
  constructor(name: string) {
    super(name);
  }

  reduceRequest(approvalRequest: ApprovalRequest) {
    if (approvalRequest.getCost() < 3000) {
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
