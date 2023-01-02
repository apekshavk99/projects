import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(){
    window.addEventListener("scroll", this.reveal)
  }

  reveal(){
    let sectionContainer = document.getElementById("sec3");
    if(sectionContainer){
      let windowHeight = window.innerHeight;
      let elementTop = sectionContainer.getBoundingClientRect().top;
      let elementVisible = 150;
      if(elementTop< windowHeight - elementVisible){
        sectionContainer.classList.add("active");
      } else{
        sectionContainer.classList.remove("active")
      }
    }
  }

}
