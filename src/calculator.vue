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
            this.action="subtract"
            this.beforeOperationClick=true
            this.operatorSign="-"
            
        },
        add(){
            this.action="add"
            this.beforeOperationClick=true
            this.operatorSign="+"
        },
        division(){
            this.action="division"
            this.beforeOperationClick=true
            this.operatorSign="/"


        },
        multiply(){
            this.action="multiply"
            this.beforeOperationClick=true
            this.operatorSign="x"


        },
        clear(){
            this.typednumber1=""
            this.typednumber2=""
            this.operatorSign=""
            this.beforeOperationClick=false
        },

        equals(){
            switch (this.action) {
                case "add":
                    this.result= parseInt(this.typednumber1)  + parseInt(this.typednumber2)
                    break;
                case "subtract":
                    this.result= parseInt(this.typednumber1)  - parseInt(this.typednumber2)
                    break;
                case "multiply":
                    this.result= parseInt(this.typednumber1)  * parseInt(this.typednumber2)
                    break;
                case "division":
                    this.result= parseInt(this.typednumber1)  / parseInt(this.typednumber2)
                    break;
                default:
                    break;
            }
            console.log(this.result)
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
    background: #967bb2e3;
    color: white;
    font-size: 31px;
    border-radius: 3px;
    box-shadow: 1px 1px 2px #4a4233;
    margin: 10px;
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
}
.number{
    width: 100%;
    padding: 6px;
    font-size: 36px;
    display: flex;
    justify-content: end;
    color: white;
    height: 60px;
    margin: 6px;
    background: #9f44f247;
    border-radius: 5px;
}

.result{
    font-size: 34px;
    color: white;
    background: #7b22ba;
    border-radius: 10px;
    width: 87%;
    padding: 10px;
    margin: 5px;
    box-shadow: 1px 1px 3px black;
    height: 53px;

}

</style>