/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class Resource {

  constructor(private fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (let f in fields) {
      this[f] = fields[f];
    }
  }
}