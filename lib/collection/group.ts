import Dep from '../dep';
import Pulse, { State, Collection } from '../root';

export default class Group extends State {
  private func: Function;
  output: Array<any> = null;
  constructor(instance: Pulse, private collection: Collection) {
    super(instance, []);

    this.build();
  }
  build() {
    let group = this.value.map(primaryKey => {
      return this.collection.data[primaryKey];
    });
    this.output = group;
  }
}
