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
  static targets = ["components", "componentsTemplate", "impacts", "impactsTemplate" ]

  connect() {
    console.log('connected')
  }

  addComponent(){
    this.addAssociation(this.componentsTemplateTarget, this.componentsTarget, "component-fields" )
  }

  addImpact(){
    this.addAssociation(this.impactsTemplateTarget, this.impactsTarget, "impact-fields" )
  }

  addAssociation(template, items, selectorClass) {
    var content = template.innerHTML.replace(
      /TEMPLATE_RECORD/g,
      items.querySelectorAll(`.${selectorClass}`).length
    );
    console.log(items.querySelectorAll(`.${selectorClass}`).length)
    console.log(content)
    template.insertAdjacentHTML("beforebegin", content);
  }

}
