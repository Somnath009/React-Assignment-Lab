# Assignment 6: Task Manager with Routing

## Problem Statement
Build a single-page Task Manager application using React Router that allows users to create, view, update, complete, filter, and delete tasks.

## Task Fields
- **Task Header**
- **Task Description**
- **Priority**: High / Medium / Low
- **Category**: Academic / Personal / Work
- **Raised Date and Time**: Automatically generated timestamp
- **Due Date**: 28 Aug 2026 (Editable)
- **Status**: Raised / Pending / Closed

## Pages & Routes
- `Dashboard`: Analytical cards & summary of tasks
- `Tasks`: Searchable, filterable task list
- `AddTask`: Form to create new task
- `TaskDetails`: Dynamic route (`/tasks/:id`) using URL parameters
- `CompletedTasks`: Archived closed tasks list
