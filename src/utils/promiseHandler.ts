const promiseHandler = async <T>(promise: Promise<T>) => {
	return promise
		.then((data: T) => [data, null])
		.catch((error) => [null, error]);
};

export default promiseHandler;
