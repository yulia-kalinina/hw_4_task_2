export default class ErrorRepository {
  constructor() {
    this.members = new Map();
  }

  translate(code) {
    let result = "";
    if (!this.members.has(code)) {
      result = "Unknown error";
    } else {
      result = this.members.get(code);
    }
    return result;
  }
}
