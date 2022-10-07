<template>
  <div class="calculatorcontainer">
    <div class="number">
        {{typednumber1}} {{operatorSign}}  {{typednumber2}}
    </div>
    <div class="keys ">
        <button  @click="click(1)"  class="key">1</button>
        <button  @click="click(2)" class="key">2</button>
        <button  @click="click(3)" class="key">3</button>
        <button  @click="click(4)" class="key">4</button>
        <button  @click="click(5)" class="key">5</button>
        <button  @click="click(6)" class="key">6</button>
        <button  @click="click(7)" class="key">7</button>
        <button  @click="click(8)" class="key">8</button>
        <button  @click="click(9)" class="key">9</button>
        <button  @click="click(0)" class="key">0</button>
        <button  @click="subtract()" class="key">-</button>
        <button  @click="add()" class="key">+</button>
        <button  @click="division()" class="key ">/</button>
        <button  @click="multiply()" class="key">X</button>
        <button  @click="clear()" class="key">C</button>
        <button @click="equals()"  class="key">=</button>
    </div>

    <!-- result -->
    <div class="result" >
        {{result}}
    </div>
  </div>
</template>

<script>
import { equal, notStrictEqual } from 'assert'


export default {
    data(){
        return {
            typednumber1:"",
            typednumber2:"",
            result:"",
            action:"",
            beforeOperationClick:false,
            operatorSign:""

        }
    },
    methods:{
        click(number){
            if(this.beforeOperationClick){
                this.typednumber2=this.typednumber2.concat(number.toString())
                
            }
            else{
                this.typednumber1=this.typednumber1.concat(number.toString())

            }
        },
        subtract(){
            if (this.typednumber1 && this.typednumber2) {
               this.typednumber1=this.equals()
               this.typednumber2=""
               this.action="subtract"
               this.beforeOperationClick=true
               this.operatorSign="-"
            }
            else{
               this.action="subtract"
               this.beforeOperationClick=true
               this.operatorSign="-"

            }
            
        },
        add(){
            if (this.typednumber1 && this.typednumber2) {
               this.typednumber1=this.equals()
               this.typednumber2=""
               this.action="add"
               this.beforeOperationClick=true
               this.operatorSign="+"
            }
            else{
               this.action="add"
               this.beforeOperationClick=true
               this.operatorSign="+"

            }
          
        },
        division(){
            if (this.typednumber1 && this.typednumber2) {
               this.typednumber1=this.equals()
               this.typednumber2=""
               this.action="division"
               this.beforeOperationClick=true
               this.operatorSign="/"
            }
            else{
               this.action="division"
               this.beforeOperationClick=true
               this.operatorSign="/"

            }
        },
        multiply(){
            if (this.typednumber1 && this.typednumber2) {
               this.typednumber1=this.equals()
               this.typednumber2=""
               this.action="multiply"
               this.beforeOperationClick=true
               this.operatorSign="X"
            }
            else{
               this.action="multiply"
               this.beforeOperationClick=true
               this.operatorSign="X"

            }

        },
        clear(){
            this.typednumber1=""
            this.typednumber2=""
            this.operatorSign=""
            this.beforeOperationClick=false
            this.result=""
        },

        equals(){
            var result=""
            switch (this.action) {
                case "add":
                    this.result=parseInt(this.typednumber1)  + parseInt(this.typednumber2)
                    result= parseInt(this.typednumber1)  + parseInt(this.typednumber2)
                    break;
                case "subtract":
                    this.result= parseInt(this.typednumber1)  - parseInt(this.typednumber2)
                    result= parseInt(this.typednumber1)  - parseInt(this.typednumber2)

                    break;
                case "multiply":
                    this.result= parseInt(this.typednumber1)  * parseInt(this.typednumber2)
                    result= parseInt(this.typednumber1)  * parseInt(this.typednumber2)
                    break;
                case "division":
                    this.result= parseInt(this.typednumber1)  / parseInt(this.typednumber2)
                    result= parseInt(this.typednumber1)  / parseInt(this.typednumber2)

                    break;
                default:
                    break;
                
            }
            return result

        }
    },



    computed:{
        
    }
    
}
</script>

<style scoped >

.keys{
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
    flex-grow: 1;
}
.key{
    min-width: 74px;
    min-height: 45px;
    border: none;
    background: #332828a1;
    color: white;
    font-size: 31px;
    border-radius: 10px;
    box-shadow: 1px 1px 3px 1px #000000;
    margin: 10px;
}

.key:hover{
    box-shadow: inset 1px 1px 3px 1px #000000;
}

.pluskey{
    grid-row-start: 4;
    grid-row-end: 6;
    grid-column-start: 3;
    
}
.calculatorcontainer{
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 13px;
    box-shadow: -2px 0px 6px 0px grey;
    max-width: 560px;
    max-height: 519px;
    margin: 10px;
    backdrop-filter: brightness(0.8) blur(1px);
}
.number{
    width: 100%;
    padding: 6px 17px;
    font-size: 36px;
    display: flex;
    justify-content: end;
    color: white;
    height: 60px;
    margin: 6px;
    border-radius: 5px;
    box-sizing: border-box;
}

.result{
    font-size: 34px;
    color: greenyellow;
    border-radius: 10px;
    width: 87%;
    padding: 10px;
    margin: 5px;
    box-shadow: 1px 1px 3px black;
    height: 53px;
    background: #33383ee0;
}

</style>