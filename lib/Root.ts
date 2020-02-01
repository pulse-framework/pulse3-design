import State from './State';
import Computed from './Computed';
import Action from './State';
import Collection from './Collection';
import Controller from './Controller';
import Request from './Request';
import SubController from './SubController';

export interface PulseConfig {}

class Pulse {
  private subController: SubController;
  constructor(config: PulseConfig) {
    this.subController = new SubController(this);
  }

  public State = (state: any) => new State(state);

  public StateGroup = (stateGroup: Object) => {
    let group: any = {};
    for (let name in stateGroup) group[name] = new State(stateGroup[name]);
    return group;
  };

  public Action = (config: any) => new Collection();
  public Reactive = (config: any) => new Collection();
  public Computed = (deps: Array<any>, func: Function) =>
    new Computed(deps, func);
  public Controller = (config: any) => new Collection();
  public Collection = (config: any) => new Collection();
}
export default Pulse;
export { State, Computed, Action, Collection, Request, Controller };
