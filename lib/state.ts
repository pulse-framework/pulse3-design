import Dep from './dep';
import Pulse from './root';
import { copy } from './utils';

export default class State {
  public value: any = null;
  public previousState: any = null;
  public dep: Dep = null;
  public nextState: any = null;

  // Mutation method returns new value, can be overwritten by extended classes.
  public mutation: () => any;

  public set bind(value: any) {
    this.set(value);
  }
  public get bind(): any {
    return this.value;
  }
  constructor(
    private instance: Pulse,
    initalState: any,
    deps: Array<Dep> = []
  ) {
    this.dep = new Dep(deps);
    this.value = initalState;
    this.nextState = copy(initalState);
  }
  public set(newState: any): this {
    // ingest update using most basic mutation method
    this.instance.runtime.ingest(this, newState);

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

  public privateWrite(value: any): void {
    this.value = value;
  }
}
// index state
// group calc then state

// all runtime jobs are state
