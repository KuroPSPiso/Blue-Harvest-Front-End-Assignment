# Blue-Harvest-Front-End-Assignment
This project contians a Vue.JS project that you can download and is ready for local testing only. There is no back-end available but where ever you need to implement the code to do so a `//TODO:` comment has been added at most if not all locations.

## Downloading the project
To start the project please clone the project with with your command-line/terminal of choice:
```git clone https://github.com/KuroPSPiso/Blue-Harvest-Front-End-Assignment.git```

## Running the project
To run the project:
* go to the following directory from the current root:
```shell
cd ./Blue-Harvest-Front-End-Assignment/vue-proj-bh-fe
```
* install the packages:
```shell
npm install
```
* locally host the project: (if the project cannot be started it is likely that port 8080 is in use by your own project or Skype, please close this service first, alternatively you can test the next step)
```shell
npm run serve
```

## Running the site
home: here you can create a new poll (you WON'T see any changes happening on the _answer-selection tab_ and on the _results tab_, and the _question tab_ is empty)
```
http://127.0.0.1:8080/
```
reponse code: here you can respond to a specif code (you WILL see any changes happening on the _answer-selection tab_ and on the _results tab_, and the _question tab_ is EMPTY)
```
http://127.0.0.1:8080/debug
```
moderation code: here you can respond to a specif code (you WON'T see any changes happening on the _answer-selection tab_ and on the _results tab_, and the _question tab_ is FILLED)
```
http://127.0.0.1:8080/0/blueharvest
```
reponse+moderation code: here you can respond to a specif code (you WILL see any changes happening on the _answer-selection tab_ and on the _results tab_, and the _question tab_ is FILLED)
```
http://127.0.0.1:8080/debug/blueharvest
```

## Building
* building the a distro, the project will be available in under `./Blue-Harvest-Front-End-Assignment/vue-proj-bh-fe/dist`, this folder can for example be uploaded to gitlab/github pages, an AWS server under `/var/www/html`, AWS s3 bucket, or your a host.
```shell
npm run build
```
* testing dist:
- windows `start ./dist/index.html`
- macos `open ./dist/index.html`
- linux `xdg-open ./dist/index.html`


## Assignment
### General description
The application is a single page application which is devided in three sections. On the first section, the user can create a poll with up to 10 options. In the central one, the user can vote by selecting one of the options and pressing the 'vote' button. On the right, the chart will update based on the questions created and the votes that each question got.
### Use cases
* AS the owner, I want to change my poll question.
* AS the owner, I want to add, edit or remove the option of my poll.
* AS the owner, I want to reset the whole form, including answers.
* AS the user, I want to see the UI refresh automatically when something changes.
* AS the respondent, I want to send several answers.
* AS the respondent, I want to see changes in real time.
### Non-functional requirements
* All fields have a limit of 80 characters.
* When the limit is reached, field should be disabled.
* There should be always at least 2 options.
* The user can vote as many times as possible.
* The chat needs to adapt ot changes in the amound of answers of labels without missing values.
* The reset button should reset the whole UI: question, option and answers.
* It's mandatory to provide a deployment URL and source code.
* You can use 3rd party libraries or frameworks to develop this assignment.
* Writing automated tests is a plus.
* You must provied a README.md file with instructions.

## Request Mail
voor het euroclear team van blue harvest  zijn wij op zoek naar junior developers die kunnen helpen met de fron-tend. het gaat om 1 of 2 developers die gaan werken aan Vue.js van het nieuwe platform die wij zelf gaan bouwen. hoe cool! wellicht kom jij in het team van euroclear. project is in amsterdam.

We willen eerst! het volgende doen, namelijk een coding test om te kijken wie er past, maar ook voor eventuele andere projecten in de toekomst. Dan kan je wellicht met een van onze Blue Harvest engineers werken!.

coding test:
1. zie bij lage oppdracht
2. upload op github
3. lever voor maandag 18:00 in de mail box van @Lvova, Kseniia en mij(Man, Yukwan). Als er vragen zijn, dan graag laten weten aan Ksenia. Zij kan jou helpen.

Ik hoor graag van jullie als er nog vragen of opmerkingen zijn.

Alvast bedankt: Sucess!
