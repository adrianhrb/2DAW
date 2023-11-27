// Tareas con agendas

class Task {
    constructor(id, description, category){
        this.id = id;
        this.description = description;
        this.category = category;
        this.finished = false;
    }

    finish() {
        this.finished = true;
    }
}

class Agenda {
    constructor(){
        this.tasks = [];
    }

    add(task) {
        this.tasks.push(task);
    }

    delete(task){
        let i = this.tasks.indexOf(task);
        this.tasks.splice(i, 1);
    }

    finish(task){
        let i = this.tasks.indexOf(task);
        this.tasks[i].finish();
    }

    showAll(){
        console.log(this.tasks);
    }

    filterActives(){
        for (let i=0; i<this.tasks.length; i++){
            if(this.tasks[i].finished == false){
                console.log(this.tasks[i]);
            }
        }
    }

    filterCategories(category){
        for (let i=0; i<this.tasks.length; i++){
            if(this.tasks[i].category == category){
                console.log(this.tasks[i]);
            }
        }
    }
}


// Simulador Twitter

class User{
    constructor(username){
        this.username = username;
        this.following = [];
    }

    follow(user){
        if(user.username != this.username){
            this.following.push(user)
        }
    }
}

class Tweet {
    constructor(title, text){
        this.title = title;
        this.text = text;
        this.retweets = [];
        this.likes = [];
    }

    like(user){
        if(this.likes.includes(user)){
            let i = this.likes.indexOf(user)
            this.tasks.splice(i, 1)
        }
        else{
            this.likes.push(user)
        }
    }

    retweet(user){
        if(this.retweets.includes(user)){
            let i = this.retweet.indexOf(user)
            this.tasks.splice(i, 1)
        }
        else{
            this.retweets.push(user)
        }
    }
}

class Twitter{
    constructor(){
        this.tweets = [];
    }

    tweet(tweet){
        this.tweets.push(tweet)
    }
}

// Coches y concesionario

class Car {
    constructor(model, license, year){
        this.model = model;
        this.license = license;
        this.year = year;
    }
}

class CarDataBase {
    constructor(){
        this.cars = {}
    }

    addCar(car){
        this.cars[car.license] = car
    }

    deleteCar(license){
        delete this.cars[license]
    }

    showAllCars(){
        for (const car in this.cars){
            console.log(car)
        }
    }
}