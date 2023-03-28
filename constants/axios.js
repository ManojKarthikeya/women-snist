import axios from "axios";

export const base_url =
	"https://3cc9-2600-3c03-00-f03c-93ff-fe31-2ebe.ngrok.io";
export const axios_instance = axios.create({
	baseURL: base_url,
	timeout: 3000,
});
