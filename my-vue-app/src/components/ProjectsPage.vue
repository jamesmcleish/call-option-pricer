
<template>
  <div>
    <LogoutButton />
    <h2>Projects</h2>
    <form @submit.prevent="calculateCallOptionPrice" class="calculator">
      <div class="form-group">
        <label for="underlyingPrice">Underlying price</label>
        <input id="underlyingPrice" placeholder="underlying price" v-model="underlyingPrice" required>
      </div>
      <div class="form-group">
        <label for="strikePrice" >Strike price</label>
        <input id="strikePrice" placeholder="strike price" v-model="strikePrice" required>
      </div>
      <div class="form-group">
        <label for="timeToMaturity">Time to maturity</label>
        <input id="timeToMaturity" placeholder="time to maturity" v-model="timeToMaturity" required>
      </div>
      <div class="form-group" >
        <label for="volatility">Volatility</label>
        <input id="volatility" placeholder="volatility" v-model="volatility" required>
      </div>
      <div class="form-group">
        <label for="riskFreeRate">Risk free interest rate</label>
        <input id="riskFreeRate" placeholder="risk-free rate" v-model="riskFreeRate" required>
      </div>
      <div class="form-group">
        <label for="dividend">Dividend</label>
        <input id="dividend" placeholder="dividend" v-model="dividend" required>
      </div>
      <button type="submit">Calculate call option price</button> <br/>
      <button @click="saveCalculation">Calculate and Save</button>
    </form>
    <div v-if="callOptionPrice !== null">
      <p>Call Option Price: {{ callOptionPrice }}</p>
      </div>
    </div>
    <ProjectTable ref="projectTable" :reRenderFlag="reRenderFlag"/>
</template>
  
  <script>
  import cumulativeStandardNormalDistribution from '../utils/normalDistribution.js';
  import LogoutButton from './LogoutButton.vue';
  import ProjectTable from './ProjectTable.vue';
  import axios from 'axios';

  export default {
    components: {
    LogoutButton,
    ProjectTable,
    },
    data() {
      return {
        underlyingPrice: '',
        riskFreeRate: '',
        strikePrice: '',
        timeToMaturity: '',
        volatility: '',
        dividend:'',
        callOptionPrice: null,
        token: window.localStorage.getItem('token'),
        reRenderFlag: false,
      };
    },
    methods: {
      calculateCallOptionPrice() {
          const S = parseFloat(this.underlyingPrice);
          const X = parseFloat(this.strikePrice);
          const r = parseFloat(this.riskFreeRate);
          const T = parseFloat(this.timeToMaturity);
          const d = parseFloat(this.dividend);
          const volatility = this.volatility;
          const d1 = (Math.log(S / X) + (r + (volatility ** 2) / 2) * T) / (volatility * Math.sqrt(T));
          const d2 = d1 - volatility * Math.sqrt(T);

          const Nd1 = cumulativeStandardNormalDistribution(d1);
          const Nd2 = cumulativeStandardNormalDistribution(d2);

          const callOptionPrice = S * Nd1 * Math.exp(-d * T) - X * Math.exp(-r * T) * Nd2;
          this.callOptionPrice = callOptionPrice.toFixed(2);
      },
      saveCalculation() {
        this.calculateCallOptionPrice();
        const data = {
        underlying_price: this.underlyingPrice,
        risk_free_rate: this.riskFreeRate,
        strike_price: this.strikePrice,
        time_to_maturity: this.timeToMaturity,
        volatility: this.volatility,
        dividend: this.dividend,
        call_option_price: this.callOptionPrice,
        token: this.token
        };
        axios.post('http://localhost:3000/projects', data)
        .then(response => {
          response.data
          this.toggleRenderFlag();
        })
        .catch(error => {
          // Handle errors
          console.error('Error saving calculation:', error);
        });
      },
      toggleRenderFlag() {
        this.reRenderFlag = !this.reRenderFlag;
      },
    },
  }
  </script>
  
  <style scoped>
  /* Component-specific styles here */
  .calculator {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    font-weight: bold;
  }

  input {
    width: 50%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    padding: 2px;
  }

  button:hover {
    background-color: #0056b3;
  }

  .calculator p {
    margin-top: 15px;
    font-size: 18px;
  }
  </style>

  
  
  