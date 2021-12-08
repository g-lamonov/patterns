interface ITransactionAdapter {
  trackNumber: string;
  amount: number;
  status: string;
}

export class Transaction {
  code: string;
  grossAmount: number;
  status: number;

  constructor(code: string, grossAmount: number, status: number) {
    this.code = code;
    this.grossAmount = grossAmount;
    this.status = status;
  }
}

export class TransactionAdapter implements ITransactionAdapter {
  trackNumber: string;
  amount: number;
  status: string;

  constructor(transaction: Transaction) {
    this.trackNumber = transaction.code;
    this.amount = transaction.grossAmount;
    this.status = this.convertStatus(transaction.status);
  }

  convertStatus(status: number): string {
    switch (status) {
      case 1:
        return "waiting_payment";
      case 2:
        return "paid";
      case 3:
        return "cancelled";
      default:
        return "";
    }
  }
}
