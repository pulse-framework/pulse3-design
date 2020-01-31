export default class Collection {
  public indexes: { [key: string]: Array<{ [key: string]: any }> } = {};
  public groups: { [key: string]: Array<number | string> } = {};
  constructor() {
    // this.dep = new Dep();
  }
  public findById(id) {}
  public getGroup(id): Array<any> {
    return [];
  }
}
