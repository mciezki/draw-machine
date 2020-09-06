class Draw {
    constructor() {
        this.taskSpan = document.querySelector('.number');
        this.refreshBtn = document.querySelector('.refresh i');
        this.newTask = document.querySelector('.newTask');
        this.addBtn = document.querySelector('.input button');
        this.message = document.querySelector('.show h2');
        this.drawBtn = document.querySelector('.show button');

        this.tasksList = [];

        this.render();


        this.addBtn.addEventListener('click', this.addTask.bind(this));
        this.drawBtn.addEventListener('click', this.letsDraw.bind(this));
        this.refreshBtn.addEventListener('click', this.refresh.bind(this));
    }

    render() {
        this.taskSpan.textContent = this.tasksList.length;
    }

    addTask() {
        if (this.newTask.value == '') return alert('Write something :(');
        this.tasksList.push(this.newTask.value);
        this.newTask.value = '';
        this.render();
    }

    letsDraw() {
        this.message.style.color = 'black';
        let checker = 0;
        if (this.tasksList.length == 0) return alert('No tasks, add something');
        let intervalIndex = setInterval(() => {
            let index = Math.floor(Math.random() * this.tasksList.length);
            this.message.textContent = this.tasksList[index];
            if (checker == 50) {
                this.message.style.color = 'green';
                return clearInterval(intervalIndex);
            }
            checker++;
        }, 50);
    }

    refresh() {
        this.tasksList.splice(0);
        this.message.textContent = '';
        this.render();
    }
}

const start = new Draw();