export const selectClient = (client) => {
	return {
    type: 'SELECT_CLIENT',
    payload: client
	}
};