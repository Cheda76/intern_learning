import { Component } from '@angular/core';

@Component({
  selector: 'app-dierective-example',
  templateUrl: './dierective-example.component.html',
  styleUrls: ['./dierective-example.component.css']
})
export class DierectiveExampleComponent {

  courses = ['Web', 'DSA', 'ML', 'AI']
  showCourses:boolean = true
  currentCourse ='web'
  showCoursesHandler(){
    this.showCourses = !this.showCourses
  }
  selectCourseHandler(course: string){
    this.currentCourse = course
    console.log(this.currentCourse)
  }
  LightStyleObj={
    'font-weight': 'bold',
    'background-color': 'white',
    'color' : 'black'
  }
  darkStyleObj={
    'font-weight': 'bold',
    'background-color': 'black',
    'color' : 'white'
  }
  selectedStyle = this.LightStyleObj
  selectedClass= 'styleRed'
  customColor = 'black'
  toggleTheme(){
    if(this.selectedStyle === this.LightStyleObj){
      this.selectedStyle= this.darkStyleObj
    }
    else{
      this.selectedStyle= this.LightStyleObj
    }
    this.toggleClass()

  }
  toggleClass(){
    if(this.selectedClass=== 'styleRed'){
      this.selectedClass='stylewhite'
    }else{
      this.selectedClass='styleRed'
    }
  }
}
