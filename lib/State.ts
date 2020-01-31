export default class State {
  public value: any = null;
  private dep: any = null;
  constructor(initalState: any) {
    // this.dep = new Dep();

    this.value = initalState;
  }
  public set(newState: any): this {
    return this;
  }
  public patch(targetWithChange): this {
    return this;
  }
  public persist(): this {
    return this;
  }
  public type(type: any): this {
    return this;
  }
  public watch(func: Function): this {
    return this;
  }
  public toggle(): this {
    return this;
  }
}
