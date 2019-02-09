# ExampleLogin
sample login app using github and mlab

#### Deployed on Heroku
Here: https://a0bp7ec1efhxa.herokuapp.com/
## APIs
#### create
```curl -X POST https://a0bp7ec1efhxa.herokuapp.com/create -H 'Content-Type: application/json' -d '{"email":"new@gmail.com","name":"Vikash Kushwaha","password":"dadada"}'```
#### login
```curl -X POST https://a0bp7ec1efhxa.herokuapp.com/login -H 'Content-Type: application/json' -d '{"email":"new@gmail.com","password":"dadada"}```
#### forgot and reset
```curl -X POST https://a0bp7ec1efhxa.herokuapp.com/reset -H 'Content-Type: application/json' -d '{"email":"new@gmail.com"}```
