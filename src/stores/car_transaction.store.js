import { defineStore } from "pinia";
import { axiosWrapper } from "@/helper/axios-wrapper.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useCarTransactionStore = defineStore({
  id: "car_transaction",
  state: () => ({
    car_transactions: [],
    car_transaction: null,
  }),
  actions: {
    async fetch() {
      let url = `${baseUrl}/car-transaction`;

      const car_transactions = await axiosWrapper.get(url);

      if (car_transactions) {
        this.car_transactions = car_transactions.data;
      }
    },
    async show() {
      let url = `${baseUrl}/car-transaction/${id}`;

      const car_transactions = await axiosWrapper.get(url);

      if (car_transactions) {
        this.car_transactions = car_transactions.data;
      }
    },
    async add(data) {
      const car_transaction = await axiosWrapper.post(
        `${baseUrl}/car-transaction`,
        data,
        true
      );

      this.car_transaction = car_transaction.data;

      return car_transaction;
    },
    async update(id, data) {
      return await axiosWrapper.put(
        `${baseUrl}/car-transaction/${id}`,
        data,
        true
      );
    },
    async delete(id) {
      return await axiosWrapper.delete(
        `${baseUrl}/car-transaction/${id}`,
        {},
        true
      );
    },
  },
});
