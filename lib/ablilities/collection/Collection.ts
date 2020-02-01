import Pulse from '../../core/Root';
import Group from './Group';
import { defineConfig } from '../../helpers';

export interface CollectionConfig {
  groups: Array<string>;
  primaryKey: string | number;
  model?: Object;
}
export default class Collection {
  public config: CollectionConfig;
  public groups: Set<Group> = new Set();
  public data: { [key: string]: any } = {};
  constructor(private instance: Pulse, config?: CollectionConfig) {
    // this.dep = new Dep();

    this.config = defineConfig(config, {
      primaryKey: 'id',
      groups: []
    });

    this.config.groups.forEach(groupName => {
      let group = new Group(this.instance, this);
      this.groups.add(group);
      if (this[groupName])
        console.error('Pulse Collection: Forbidden group name!');

      this[groupName] = group;
    });
  }
  public findById(id) {
    return;
  }
  public getGroup(id): Array<any> {
    return [];
  }
}
