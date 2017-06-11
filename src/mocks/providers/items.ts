import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let items = [
      {
        "name": "What counts as sexual assault?",
        "about": "answer here..."
      },
      {
        "name": "What is consent?",
        "about": "answer here..."
      },
      {
        "name": "Is it assault if it was my partner?",
        "about": "answer here..."
      },
      {
        "name": "I have been assaulted, what do I do next?",
        "about": "answer here..."
      },
      {
        "name": "Is it safe to inform law enforcement",
        "about": "answer here..."
      },
      {
        "name": "Where can I file a report?",
        "about": "answer here..."
      },
      {
        "name": "etc",
        "about": "answer here..."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
