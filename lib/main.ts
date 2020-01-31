import State from './State';
import Computed from './State';
import Action from './State';
import Collection from './Collection';
import Controller from './Controller';
import Request from './Request';

class Pulse {
  Reactive(
    arg0: State[]
  ): import('../example/modules/accounts').AccountControllerNamespace {
    throw new Error('Method not implemented.');
  }
  public State = (state: any) => new State(state);
  public StateGroup: (stateGroup: Object) => { [key: string]: State };
  public Action: Function;
  public Computed: Function;
  public Controller: Function;
  public Collection: Function;
  public plugin: Function;
  constructor(config: PulseConfig) {}
}
export default Pulse;
export { State, Computed, Action, Collection, Request, Controller };

export interface PulseConfig {}
