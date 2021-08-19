// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "addComponent", "components", "componentsTemplate", "impacts", "addImpact" ]

  connect() {
    console.log('connected')
  }

  addComponent(){
    console.log(this.componentsTarget)
    this.addAssociation(this.componentsTemplateTarget, this.componentsTarget )
  }

  addImpact(){
  }

  addAssociation(template, items) {
    var content = template.innerHTML.replace(
      /TEMPLATE_RECORD/g,
      items.querySelectorAll(".component-fields").length
    );
    template.insertAdjacentHTML("beforebegin", content);
  }

}
