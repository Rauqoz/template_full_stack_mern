import redaxios from 'redaxios';
export const UPDATE_POKEMON = 'UPDATE_POKEMON';
export const UPDATE_DATA_POKEMON = 'UPDATE_DATA_POKEMON';
export const RESET = 'RESET';
export const SEARCH_POKEMON = 'SEARCH_POKEMON';

export const update_pokemon_ = (e) => {
	return {
		type: UPDATE_POKEMON,
		value: e.target.value.toLowerCase()
	};
};

export const update_data_pokemon_ = (data) => {
	return {
		type: UPDATE_DATA_POKEMON,
		value: data
	};
};

export const reset_ = () => {
	return {
		type: RESET,
		value: ''
	};
};

export const search_pokemon_ = (poke) => {
	return async (dispatch) => {
		try {
			const { data } = await redaxios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`);
			dispatch(update_data_pokemon_(data));
		} catch (error) {
			dispatch(update_data_pokemon_(`Error on Pokemon ${poke}!`));
		}
	};
};
