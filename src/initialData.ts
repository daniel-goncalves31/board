export interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Stage {
  id: string;
  title: string;
  tasks: Task[];
}

export interface Project {
  id: string;
  title: string;
  stages: Stage[];
}

export const data: Project = {
  id: "project-1",
  title: "Project 01",
  stages: [
    {
      id: "stage-2",
      title: "Stage 1",
      tasks: [
        {
          id: "task-3",
          title: "Task 1",
          description: "To do something very important",
          date: new Date().toLocaleString()
        },
        {
          id: "task-4",
          title: "Task 2",
          description: "To do something very important",
          date: new Date().toLocaleString()
        },
        {
          id: "task-5",
          title: "Task 3",
          description: "To do something very important",
          date: new Date().toLocaleString()
        }
      ]
    },
    {
      id: "2",
      title: "Stage 2",
      tasks: [
        {
          id: "1",
          title: "Task 1",
          description: "To do something very important",
          date: new Date().toLocaleString()
        },
        {
          id: "2",
          title: "Task 2",
          description: "To do something very important",
          date: new Date().toLocaleString()
        },
        {
          id: "3",
          title: "Task 3",
          description: "To do something very important",
          date: new Date().toLocaleString()
        },
        {
          id: "11",
          title: "Task 1",
          description: "To do something very important",
          date: new Date().toLocaleString()
        },
        {
          id: "12",
          title: "Task 2",
          description: "To do something very important",
          date: new Date().toLocaleString()
        },
        {
          id: "13",
          title: "Task 3",
          description: "To do something very important",
          date: new Date().toLocaleString()
        },
        {
          id: "21",
          title: "Task 1",
          description: "To do something very important",
          date: new Date().toLocaleString()
        },
        {
          id: "22",
          title: "Task 2",
          description: "To do something very important",
          date: new Date().toLocaleString()
        },
        {
          id: "23",
          title: "Task 3",
          description: "To do something very important",
          date: new Date().toLocaleString()
        }
      ]
    },
    {
      id: "3",
      title: "Stage 3",
      tasks: [
        {
          id: "dsadsa",
          title: "Task 1",
          description: "To do something very important",
          date: new Date().toLocaleString()
        },
        {
          id: "hfdhfdhd",
          title: "Task 2",
          description: "To do something very important",
          date: new Date().toLocaleString()
        },
        {
          id: "dsadasdasdas",
          title: "Task 3",
          description: "To do something very important",
          date: new Date().toLocaleString()
        }
      ]
    }
  ]
};
