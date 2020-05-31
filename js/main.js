
    function count(){
        if (!this.counter) {
            this.counter = 0
        };
         this.innerHTML = ++this.counter;
         console.log(this.counter);
         document.getElementById("qq").innerHTML = this.counter;
    }


  