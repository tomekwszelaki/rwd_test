# rwd_test
A small proof of concept for testing responsive webs

# How to run
You need a globally installed cucumber (it's easiest that way), so:
```
npm install -g cucumber
```
Then clone the repo, install other dependencies and run the tests:
```
git clone https://github.com/tomekwszelaki/rwd_test.git
cd rwd_test
npm install
cucumber-js
```
This will run the tests with default config. You can change the environment (for now there's only one though :P ) and the site agains which to run tests by changing two environmental variables: `ALLEGRO_ENV (defaults to: 'test1')` and `ALLEGRO_SITE (defaults to allegro)`. 
