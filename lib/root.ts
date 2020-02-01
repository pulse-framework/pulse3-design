import State from './state';
import Computed from './computed';
import Action from './state';
import Collection from './collection/collection';
import Request from './request/request';
import SubController from './sub';
import Runtime from './runtime';

export interface PulseConfig {}

class Pulse {
  public subController: SubController;
  public runtime: Runtime;
  constructor(config: PulseConfig) {
    this.subController = new SubController(this);
    this.runtime = new Runtime(this);
  }

  public State = (state: any) => new State(this, state);

  public StateGroup = (stateGroup: Object) => {
    let group: any = {};
    for (let name in stateGroup)
      group[name] = new State(this, stateGroup[name]);
    return group;
  };

  public Action = (config: any) => new Collection(this);
  public Reactive = (config: any) => new Collection(this);
  public Computed = (deps: Array<any>, func: Function) =>
    new Computed(this, deps, func);
  public Controller = (config: any) => new Collection(this);
  public Collection = (config: any) => new Collection(this, config);
}
export default Pulse;
export { State, Computed, Action, Collection, Request };
