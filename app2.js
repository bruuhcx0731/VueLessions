const app = Vue.createApp({
    data(){
        return{
            courseGoal: 'Finish the course and learn Vue',
            courseGoalB: 'Master Vue and get a job!',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoal;
            } 
            else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');