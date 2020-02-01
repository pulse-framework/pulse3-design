// Global Subscription Controller
// This class handles external components subscribing to Pulse.

import { genId, normalizeMap } from './helpers';
import Dep from './dep';
import Pulse from './root';

export interface SubscribingComponentObject {
  componentUUID: string;
  keys: Array<string>;
}

export class ComponentContainer {
  public uuid: string = genId();
  public ready: boolean = true;
  public deps: Set<Dep> = new Set();
  public mappedDeps: { [key: string]: Dep } = {};
  public manualDepTracking: boolean = false;
  public evaluated: Object;
  constructor(
    public instance: any,
    public config: {
      waitForMount: boolean;
      blindSubscribe: boolean;
    },
    public depsFunc?: Function
  ) {
    this.manualDepTracking = typeof this.depsFunc !== 'undefined';
    instance.__pulseUniqueIdentifier = this.uuid;
    if (config.waitForMount) this.ready = false;
  }
}

export default class SubController {
  public subscribingComponentKey: number = 0;
  public trackingComponent: boolean | string = false;

  // used by discoverDeps to get several dep classes
  public trackAllDeps: boolean = false;
  public trackedDeps: Set<Dep> = new Set();
  public componentStore: { [key: string]: ComponentContainer } = {};
  public root: Pulse;

  constructor(root: Pulse) {
    this.root = root;
  }

  public registerComponent(instance, config, depsFunc) {
    let componentContainer = new ComponentContainer(instance, config, depsFunc);

    this.componentStore[componentContainer.uuid] = componentContainer;

    return componentContainer;
  }
}
