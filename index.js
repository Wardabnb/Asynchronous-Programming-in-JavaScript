// Task 01:
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(value);
    }
  }
  
// Task 02:
async function awaitCall() {
       const data = await fetchDataFromAPI();
      console.log('Data from API:', data);

  }

// Task 03:
// 01:
  async function awaitCall() {
    try {
    
      const data = await fetchDataFromAPI();
      console.log('Data from API:', data);
    } catch (error) {
      console.error('Failed to fetch data from API:', error.message);
    }
  }
// 02:
async function chainedAsyncFunctions() {
  
    await (async () => {
      await delay(1000);
      console.log('Async Function 1 executed');
    })();
    
    
    await (async () => {
      await delay(1000);
      console.log('Async Function 2 executed');
    })();
    
   
    await (async () => {
      await delay(1000);
      console.log('Async Function 3 executed');
    })();
  }
  
// Task 04
async function concurrentRequests() {
    try {
      
      const [result1, result2] = await Promise.all([
        fetchDataFromAPI('https://api.example.com/endpoint1'),
        fetchDataFromAPI('https://api.example.com/endpoint2')
      ]);
  
    
      console.log('Combined Results:', { result1, result2 });
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
// Task 05
async function parallelCalls(urls) {
    try {
      // Make API calls for all URLs concurrently using Promise.all()
      const responses = await Promise.all(urls.map(url => fetchDataFromAPI(url)));
  
      // Log the responses once all requests are complete
      console.log('Responses:', responses);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  