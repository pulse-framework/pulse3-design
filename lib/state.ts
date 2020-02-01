import Dep from './dep';
import Pulse from './root';

export default class State {
  public value: any = null;
  public previousState: any = null;
  public dep: Dep = null;
  public set bind(value: any) {
    this.set(value);
  }
  public get bind(): any {
    return this.value;
  }
  constructor(private instance: Pulse, initalState: any, deps?: Array<Dep>) {
    this.dep = new Dep(this, deps);
    // this.dep = new Dep();
    this.value = initalState;
  }
  public set(newState: any): this {
    // dispatch self to runtime
    this.previousState = this.value;
    this.perform({ value: newState }); // REPLACE WITH ACTUAL RUNTIME CALL

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

  public perform(job): void {
    this.privateWrite(job.value);
  }
  private privateWrite(value: any): void {
    this.value = value;
  }
}
// index state
// group calc then state

// all runtime jobs are state
