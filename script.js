const Viewer = {
    screen: document.getElementById('viewer'),
    count: 0,
    
    start(){
        this.screen.value = "0"
        
        const Interval = setInterval(() => {
            Viewer.count = Viewer.count + 1
            Viewer.screen.value = `${Viewer.count}`
        
            if(Viewer.count > 59){
                Viewer.finish()
            }
        }, 1000)

        setTimeout(() => clearInterval(Interval), 60000)

        this.count = 0
    },

    finish(){
        alert("Hora de treinar!")
        this.screen.value = "..."
    }
}