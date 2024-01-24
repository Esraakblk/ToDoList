import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoComponent,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  inputText:string=''
  list:string[]=[];
  deletes:string[]=[];
  isEditeMode =false;

  addTask(){
    this.list.push(this.inputText);
    this.inputText=''
  }

  onCheck(index: number){
    this.inputText = this.list[index];
    if (!this.isEditeMode) this.isEditeMode=true;
    else this.isEditeMode= false;
    this.inputText=''
  }

  onDelete(index: number){
    const item = this.list[index];
    this.deletes.push(item);
    this.list.splice(index, 1);
    this.inputText=''
  }

}
