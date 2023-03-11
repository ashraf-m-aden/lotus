import employeeData from "../data/employee.json";
import { defineStore } from "pinia";

export const employeeStore = defineStore("employee", () => {
  const employee = employeeData.data;

  return { employee };
});
