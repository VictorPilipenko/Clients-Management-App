import { createSelector } from "reselect";

const getClients = state => state.clients;
const getFilters = state => state.filters;

export const getVisibleClients = createSelector(
  [getClients, getFilters],
  (clients, filters) => {
    return clients.filter(client => {
        const textMatch =
            client.general.firstName.toLowerCase().includes(filters.text.toLowerCase()) ||
            client.general.lastName.toLowerCase().includes(filters.text.toLowerCase()) ||
            client.job.company.toLowerCase().includes(filters.text.toLowerCase()) ||
            client.job.title.toLowerCase().includes(filters.text.toLowerCase()) ||
            client.contact.email.toLowerCase().includes(filters.text.toLowerCase()) ||
            client.contact.phone.toLowerCase().includes(filters.text.toLowerCase()) ||
            client.address.street.toLowerCase().includes(filters.text.toLowerCase()) ||
            client.address.city.toLowerCase().includes(filters.text.toLowerCase()) ||
            client.address.zipCode.toLowerCase().includes(filters.text.toLowerCase()) ||
            client.address.country.toLowerCase().includes(filters.text.toLowerCase());


        return textMatch;
    });
}
);
