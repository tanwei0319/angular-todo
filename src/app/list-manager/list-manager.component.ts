import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';
import {TodoListService} from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoListService.addItem({ title : title });
  }

  removeItem(item) {
    this.todoListService.removeItem(item);
  }

  completeItem(item: TodoItem, changes) {
    this.todoListService.completeItem(item, changes);
  }

  updateItem(title: string, newTitle: string) {
    this.todoListService.updateItem(
      { title: title},
      { title: newTitle});
  }
}
