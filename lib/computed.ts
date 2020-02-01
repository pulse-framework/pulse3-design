import Dep from './dep';
import Pulse, { State } from './root';

export default class Computed extends State {
  private func: Function;
  constructor(instance: Pulse, deps: Array<State>, func: Function) {
    super(instance, null);

    this.func = func;

    deps.forEach(state => state.dep.deps.add(this));

    this.mutation = () => this.run();

    // initial
    this.run();
  }

  run() {
    const output = this.func();
    this.set(output);
  }
}
