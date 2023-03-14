<template>
    <div class="flex flex-col justify-center align-middle p-10">
        <v-btn color="primary" @click="pay" :loading="spinner">
  Button</v-btn>
</div>
</template>

<script setup>
import axios from 'axios';
import {ref} from 'vue';


const spinner = ref(false)
const data = JSON.stringify({
  "price_amount": 20,
  "price_currency": "usd",
  "pay_currency": "btc",
  "ipn_callback_url": "https://nowpayments.io",
  "order_id": "RGDBP-21314",
  "order_description": "Test order description"
});

const config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://api.nowpayments.io/v1/payment',
  headers: { 
    'x-api-key': '5DMHSVJ-8KAMPWM-KZKH3J1-4K5EZ78', 
    'Content-Type': 'application/json'
  },
  data : data
};



function pay(){
    spinner.value = true;

    axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  spinner.value = false;

})
.catch(function (error) {
  console.log(error);
  spinner.value = false;

});
}



</script>