import { renderListWithTemplate } from "./utils.mjs";


function makesTemplate(make) {
    return `<li class="makes">
    <h2 class="makename"> ${make} </h2>
    </li>`
}


// This is from homework, how to incorporate into final project?
export default class ProductListing {
    constructor(category, dataSource, listElement) {
      // We passed in this information to make our class as reusable as possible.
      // Being able to define these things when we use the class will make it very flexible
      this.category = category;
      this.dataSource = dataSource;
      this.listElement = listElement;
    }

    async init() {
      // our dataSource will return a Promise...so we can use await to resolve it.
      const list = await this.dataSource.getData();
      // render the list - to be completed
    }
    renderList(list) {
        const htmlStrings = list.map(productCardTemplate);
        this.listElement.insertAdjacentHTML('afterbegin', htmlStrings.join(''));
      }
    // // render after doing the first stretch
    // renderList(list) {
    // renderListWithTemplate(productCardTemplate, this.listElement, list);
    // }
  }