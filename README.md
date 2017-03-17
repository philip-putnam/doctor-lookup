# _Doctor Lookup App_

#### _This web application allows users to search for doctors based on a symptom or medical issue utilizing the BetterDoctor API, 03/17/2017_

#### By _**Philip Putnam**_

## Description

_This application allows users to enter symptoms or medical issues into a form on a webpage then gets information from the BetterDoctors API to fill in appropriate doctor information._

## Setup/Installation Requirements

### Method 1:
* _For this project you will need a unique API key from https://betterdoctor.com/developers/ , after signing up and receiving your key you will have the ability to make 1,000 API calls per day using this application!_
* _Using a web browser or terminal, clone the repository at https://github.com/philip-putnam/doctor-lookup __
* _Navigate to the project directory, at the top level of the project directory in a terminal, type:
> npm install
and then, after npm is finished installing, type:
> bower install_
* _At the top level of the project directory, create a file called '.env' without quotes, in it type:

exports.apiKey = "<YOUR BetterDoctors API KEY>";

Where, <YOUR BetterDoctors API KEY> is your actual API key that was mentioned in the first installation instruction. Your API key does need to be in quotes and does require a semi-colon afterward. Do not share your API key!_
* _In your terminal, at the top level of the project directory, type: 'gulp serve' without quotes_

## Specifications

| Expected Behavior: application will... | Input | Output |
| ----------------- | ------------------ | ----- | ------ |
| search for doctor by medical issue | "toothache"  | API call search results  |


## Known Bugs

_No known bugs at this time_

## Support and contact details

_Please e-mail Philip Putnam, at staplehead989@gmail.com for support with the webpage_

## Technologies Used

_HTML_
_CSS_
_Javascript_
_jQuery_
_AJAX_
_Node_
_Bower_
_Bootstrap_
_Atom_
_Git_
_GitHub_

### License

*This webpage is licensed under the MIT license*

Copyright (c) 2017 **_Philip Putnam_**
