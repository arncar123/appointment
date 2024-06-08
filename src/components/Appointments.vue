<template>
    <div>
      <h2>Appointments</h2>
      <ul>
        <li v-for="appointment in appointments" :key="appointment.id">
          {{ appointment.appointment_date }} - {{ appointment.reason }}
          <button @click="editAppointment(appointment)">Edit</button>
          <button @click="deleteAppointment(appointment.id)">Delete</button>
        </li>
      </ul>
      <button @click="newAppointment">New Appointment</button>
    </div>
  </template>
  
  <script>
  import appointmentService from '@/services/appointmentService';
  
  export default {
    data() {
      return {
        appointments: [],
      };
    },
    methods: {
      async fetchAppointments() {
        const response = await appointmentService.getAppointments();
        this.appointments = response.data;
      },
      editAppointment(appointment) {
        this.$router.push({ name: 'EditAppointment', params: { id: appointment.id } });
      },
      deleteAppointment(id) {
        if (confirm('Are you sure you want to delete this appointment?')) {
          appointmentService.deleteAppointment(id).then(() => this.fetchAppointments());
        }
      },
      newAppointment() {
        this.$router.push({ name: 'NewAppointment' });
      },
    },
    created() {
      this.fetchAppointments();
    },
  };
  </script>
  