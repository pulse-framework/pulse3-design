import Dep from './Dep';

export default class State {
  public value: any = null;
  public previousState: any = null;
  private dep: Dep = null;
  public set bind(value: any) {
    this.set(value);
  }
  public get bind(): any {
    return this.value;
  }
  constructor(initalState: any) {
    this.dep = new Dep(this);
    // this.dep = new Dep();
    this.value = initalState;
  }
  public set(newState: any): this {
    // dispatch self to runtime

    this.runtimeUpdate({ value: newState });
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

  public runtimeUpdate(job) {
    this.privateWrite(job.value);
  }

  private privateWrite(value: any): void {
    this.value = value;
  }
}
