Vue.createApp({
    data(){
        return{
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');



// const button = document.querySelector('button');

// const iput = document.querySelector('input');
// const list = document.querySelector('ul');

// function addGoal(){
//     const enterValue = iput.value;
//     const listItem = document.createElement('li');
//     listItem.textContent = enterValue;
//     list.appendChild(listItem);
//     iput.value='';
// }


// button.addEventListener('click', addGoal)