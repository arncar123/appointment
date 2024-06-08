import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export default {
  getAppointments() {
    return axios.get(`${API_URL}/appointments`);
  },
  getAppointment(id) {
    return axios.get(`${API_URL}/appointments/${id}`);
  },
  createAppointment(appointment) {
    return axios.post(`${API_URL}/appointments`, appointment);
  },
  updateAppointment(id, appointment) {
    return axios.put(`${API_URL}/appointments/${id}`, appointment);
  },
  deleteAppointment(id) {
    return axios.delete(`${API_URL}/appointments/${id}`);
  },
};
