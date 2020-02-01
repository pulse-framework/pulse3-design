import Dep from './Dep';

export default class Computed {
  public value: any = null;
  private func: Function;
  private dep: Dep;
  constructor(deps, func: any) {
    this.dep = new Dep(this, deps);
    this.func = func;
  }

  public runtimeUpdate(job) {}
}
