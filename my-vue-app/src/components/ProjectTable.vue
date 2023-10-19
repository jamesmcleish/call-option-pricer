<template>
  <div class="table-container">
    <table v-if="records.length > 0" class="neat-grid">
      <thead>
        <tr>
          <th class="td">Call Option Price</th>
          <th class="td">Underlying Price</th>
          <th class="td">Strike Price</th>
          <th class="td">Time to Maturity</th>
          <th class="td">Volatility</th>
          <th class="td">Risk-Free Rate</th>
          <th class="td">Dividend</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="record in records" :key="record.id" class="table-row">
          <td class="td">{{ roundToNDecimals(record.call_option_price, 2) }}</td>
          <td class="td">{{ roundToNDecimals(record.underlying_price, 2) }}</td>
          <td class="td">{{ roundToNDecimals(record.strike_price, 2) }}</td>
          <td class="td">{{ roundToNDecimals(record.time_to_maturity, 5) }}</td>
          <td class="td">{{ roundToNDecimals(record.volatility, 3) }}</td>
          <td class="td">{{ roundToNDecimals(record.risk_free_rate, 3) }}</td>
          <td class="td">{{ roundToNDecimals(record.dividend, 3) }}</td>
          <td class="td">
            <button @click="deleteRecord(record.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        records: [],
      };
    },
    props: {
    reRenderFlag: Boolean,
    },
    created() {
      this.fetchRecords();
    },
    watch: {
      reRenderFlag(newFlag, oldFlag) {
        if (newFlag !== oldFlag) {
          // React to changes in the render flag, regardless of its previous state
          this.fetchRecords(); // You can call any method or perform any action here
        }
      },
    },
    methods: {
      fetchRecords() {
        const token = localStorage.getItem('token');
        
        if (!token) {
          return;
        }
        
        axios.get('http://localhost:3000/projects', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(response => {
            this.records = response.data;
          })
          .catch(error => {
            console.error('Error fetching records:', error);
          });
        },
      deleteRecord(id) {
      const token = localStorage.getItem('token');

      if (!token) {
        return;
      }
      axios.delete(`http://localhost:3000/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          console.log('Record deleted:', response.data);
          // After successful deletion, you may want to re-render the component
          this.fetchRecords();
        })
        .catch(error => {
          console.error('Error deleting record:', error);
        });
    },
      roundToNDecimals(number, n) {
        const multiplier = Math.pow(10, n);
        return Math.round(number * multiplier) / multiplier;
      },
    },
  };
  </script>

  <style>
  .table-container {
    text-align: center; 
    margin: 0 auto;
  }

  .neat-grid {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #000000;
  }

  .td {
    border: 1px solid #000000;
    padding: 8px;
  }

  .table-row:nth-child(even) {
    background-color: #e5e5e5; 
  }
  </style>