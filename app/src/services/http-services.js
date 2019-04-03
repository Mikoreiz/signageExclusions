//Grabs data from api
import 'whatwg-fetch';

class HttpService {
	getPassengers = () => {
		var promise = new Promise((resolve, reject) => {
			fetch('http://localhost:3001/screen')
				.then(response => {
					resolve(response.json());
			})
		});
		return promise;
	}
}

export default HttpService;