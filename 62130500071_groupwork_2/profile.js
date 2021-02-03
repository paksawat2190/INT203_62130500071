const app = {
    data() {
        return {
            msg: 'Hello, Vue3',
            shown: true,
            url: 'http://www.sit.kmutt.ac.th',
            Articles : '168',
            Followers :'188',
            Rating :'10.0',
            name:'Paksawat Rakthai',
            career:'Sophomore KMUTT'

        }
    },created() {
        console.log('message is' + this.msg)
    },updated(){
        console.log('message is' + this.msg)
    }
}
mountedApp = Vue.createApp(app).mount('#app')

