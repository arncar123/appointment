<template>
    <div>
      <h2>{{ isEditMode ? 'Edit' : 'New' }} Appointment</h2>
      <form @submit.prevent="saveAppointment">
        <div>
          <label for="appointment_date">Date:</label>
          <input type="datetime-local" v-model="appointment.appointment_date" required>
        </div>
        <div>
          <label for="reason">Reason:</label>
          <textarea v-model="appointment.reason"></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script>
  import appointmentService from '@/services/appointmentService';
  
  export default {
    props: ['id'],
    data() {
      return {
        appointment: {
          patient_id: null,
          doctor_id: null,
          appointment_date: '',
          reason: '',
        },
        isEditMode: false,
      };
    },
    methods: {
      async fetchAppointment() {
        const response = await appointmentService.getAppointment(this.id);
        this.appointment = response.data;
      },
      async saveAppointment() {
        if (this.isEditMode) {
          await appointmentService.updateAppointment(this.id, this.appointment);
        } else {
          await appointmentService.createAppointment(this.appointment);
        }
        this.$router.push({ name: 'Appointments' });
      },
    },
    created() {
      if (this.id) {
        this.isEditMode = true;
        this.fetchAppointment();
      }
    },
  };
  </script>
  