Modules below are written by Typescript.

## fetchWrapper

Description

: FetchWrapper helps you easily make XHR requests using fetch API like axios

How to use

1. install

   ```bash
   npm i woowa-utils
   ```

2. import fetchWrapper

   ```bash
   import { fetchWrapper } from 'fetchWrapper'
   ```

3. give parameters that fetchWrapper needs

   1. type of input and output

   2. method
      * you can use five HTTP method type
        * GET
        * POST
        * DELETE
        * PATCH
        * PUT
   3. url
   4. body(optional)

   

   **here we'll give you some examples that might help you**

   

   If you make **GET** request, you can use fetchWrapper as below

    ```js
         // define type of input
         export interface ITransactionResponse {
           id: number
           content: string
           price: number
           paymentName: string
           categoryName: string
           createdAt: Date
         }
         
         const TRANSACTION = 'http:localhost:3000/api/transaction'
         
         export const fetchAllTransaction = async () => {
           // define type of input and output
           // if there is no output, make it 'undefined'
           return await fetchWrapper<ITransactionResponse[], undefined>(
             // define method
             'GET',
             // define url
             TRANSACTION
            // if there is no body, leave blank 
           )
         }
    ```

   If you're making **POST** request, you can use fetchWrapper as below

   ```js
   // define input
   export interface ITransactionResponse {
     id: number
     content: string
     price: number
     paymentName: string
     categoryName: string
     createdAt: Date
   }
   
   // define output
   export interface ICreateTransaction {
     content: string
     price: number
     paymentId: number
     userId: number
     categoryId: number
   }
   
   const TRANSACTION = 'http:localhost:3000/api/transaction'
   
   export const createNewTransaction = async (args: ICreateTransaction) => {
   	// input type should be ITransactionResponse
     // output type should be ICreateTransaction
     return await fetchWrapper<ITransactionResponse[], ICreateTransaction>(
       // define method
       'POST',
       // define url
       TRANSACTION,
       // define body(optional)
       args
     )
   }
   ```

   As fetchWrapper pass result when promise is resolve using async/await pattern, function that uses fetchWrapper can just use the data llik the one that synchronous function returns.

   

   **However** , It is important to notice that fetchWrapper returns array in which first element is response and the second one is error.

   

   Therefore, you have to use api function that uses fetchWrapper like below

   

   ```js
   const [result, err] = await createNewTransaction(body)
   ```

   You can continue the logic using result and err.

   

   Thank you.

   

   [Github](https://github.com/woowa-techcamp-2020/woowa-utils/blob/master/README.md)

   


