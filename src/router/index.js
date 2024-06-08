import Vue from 'vue';
import VueRouter from 'vue-router';
import Appointments from '@/components/Appointments.vue';
import AppointmentForm from '@/components/AppointmentForm.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/appointments', name: 'Appointments', component: Appointments },
  { path: '/appointments/new', name: 'NewAppointment', component: AppointmentForm },
  { path: '/appointments/:id/edit', name: 'EditAppointment', component: AppointmentForm, props: true },
];

const router = new VueRouter({
  routes,
});

export default router;
