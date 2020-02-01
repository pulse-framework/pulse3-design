import State from './State';
import Computed from './Computed';
import Action from './State';
import Collection from '../ablilities/collection/Collection';
import Request from '../ablilities/request/Request';
import SubController from './SubController';

export interface PulseConfig {}

class Pulse {
  public subController: SubController;
  constructor(config: PulseConfig) {
    this.subController = new SubController(this);
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
