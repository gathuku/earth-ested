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
  static targets = ["components", "componentsTemplate", "impacts", "impactsTemplate", "subComponentTemplate" ]

  connect() {
  }

  addSubComponent(){
    this.addAssociation(this.subComponentTemplateTarget, this.componentsTarget, "subComponent" )
  }

  addComponent(){
    this.addAssociation(this.componentsTemplateTarget, this.componentsTarget, "component-fields" )
  }

  addImpact(event){
    event.preventDefault()
    // Prevent adding another impact if exists
    var impacts = event.target.closest(".impacts").querySelectorAll(".impacts-fields")
    if(impacts.length > 0){
      event.target.textContent = "Cannot add more than one impact"
      return;
    }

    var impactTemplate = event.target.closest(".component-fields").querySelector("template")

    this.addAssociation(impactTemplate, this.impactsTarget, "impact-fields" )
  }

  addAssociation(template, items, selectorClass) {
    var content = template.innerHTML.replace(
      /TEMPLATE_RECORD/g,
      items.querySelectorAll(`.${selectorClass}`).length
    );
    template.insertAdjacentHTML("beforebegin", content);
  }

  removeComponent(event){
    event.preventDefault()
    event.target.closest(".component-fields").style.display = "none"
  }

}
