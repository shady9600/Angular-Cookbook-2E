import { CommonModule } from '@angular/common';
import { Component, ViewChild, computed, effect, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@codewithahsan/ng-cb-ui';
import { Task, TasksFilter } from './task.model';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    RouterModule,
    HeaderComponent,
    SnackbarComponent,
  ],
})
export class AppComponent {
  @ViewChild(SnackbarComponent) snackbar!: SnackbarComponent;

  // ---- Effect property ----
  // A function that triggers anytime a signal changes
  // useful for things like making an API call, saving stuff to local storage,
  // reporting an analytics event, and logging
  completedEffectRef = effect(() => {
    // get the value of the tasks signal
    const tasks = this.tasks();

    // compare the computed finishedTaskCount with the length of the tasks signal
    if (this.finishedTasksCount() === tasks.length && tasks.length > 0) {
      this.snackbar.show();
    }
  });

  // ---- Signal property ----
  // writable signal of type Task[]
  // to render in template use tasks() getter function
  // to change value call this.tasks.set(<value>)
  tasks = signal<Task[]>([
    { title: 'Buy milk', completed: false },
    { title: 'Read a book', completed: true },
  ]);

  // --- Computed property ----
  finishedTasksCount = computed(() => {
    // get the array value of tasks signal
    // filter only completed tasks
    // return length of completed tasks
    return this.tasks().filter((task) => task.completed).length;
  });

  filter = signal(TasksFilter.All);
  filters = TasksFilter;

  // ---- Computed property ----
  // A value that depends on one or more signals
  // and updates whenever a signal is changed.
  // Not directly writable
  filteredTasks = computed(() => {
    switch (this.filter()) {
      case TasksFilter.All:
        return this.tasks();
      case TasksFilter.Active:
        return this.tasks().filter((task) => !task.completed);
      case TasksFilter.Completed:
        return this.tasks().filter((task) => task.completed);
    }
  });

  changeFilter(filter: TasksFilter) {
    this.filter.set(filter);
  }

  toggleTask(task: Task) {
    // map through all tasks and return a new array
    const updatedTasks = this.tasks().map((taskItem) => {
      // when the element title in the signals array matches the input title
      // return a new object with the inverse of its completed value.
      // otherwise return the task as-is.
      return taskItem.title === task.title
        ? {
            ...taskItem,
            completed: !taskItem.completed,
          }
        : taskItem;
    });
    // set the tasks signal to the newly updated array
    this.tasks.set(updatedTasks);
  }

  /**
   * Takes the value from the bound input element.
   * If the value exists, a new task element is added to the tasks signal.
   *
   * @param titleInput the input element bound to #titleInput
   */
  addTask(titleInput: HTMLInputElement) {
    if (titleInput.value) {
      const newTask = {
        title: titleInput.value,
        completed: false,
      };
      this.tasks.set([...this.tasks(), newTask]);
    }
    titleInput.value = '';
  }
}
