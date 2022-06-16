import axios, { AxiosInstance } from 'axios';

export default class RequestUtils {
	static symplaApi: AxiosInstance;
	static tokenSympla = 'b488855deffb611bd858d496437a657283b8af31740c1cf6956f3df1d8698008'


	static setAuthToken() {
		this.symplaApi = axios.create({
			baseURL: "https://api.sympla.com.br",
			headers: {
				'Access-Control-Allow-Origin': '*',
				's_token': this.tokenSympla,
			},
		});
	}
}
