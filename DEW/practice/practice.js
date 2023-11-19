// Tareas con agendas

class Task {
    constructor(id, description, category){
        this.id = id
        this.description = description
        this.category = category
        this.finished = false
    }

    finish() {
        this.finished = true
    }
}

class Agenda {
    constructor(){
        this.tasks = []
    }

    add(task) {
        this.tasks.push(task)
    }

    delete(task){
        let i = this.tasks.indexOf(task)
        this.tasks.splice(i, 1)
    }
}