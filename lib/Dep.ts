import { ComponentContainer } from './SubController';
export default class Dep {
  public deps: Set<Dep> = new Set();
  public subs: Set<ComponentContainer> = new Set();
  private context: any;
  constructor(context, initialDeps?: Array<Dep>) {
    if (initialDeps) initialDeps.forEach(dep => this.deps.add(dep));
    this.context = context;
  }
}
