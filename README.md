# React form with useReducer

## Background / Description

Clients can add new employees to our service by using our platform to submit their details. Your task is to create a form which changes based on the country an employee is being onboarded in and allows us to collect the needed information for that country.

There is some employee information that is needed for every country:

- Country of work
- First name
- Last name
- Date of birth
- Holiday allowance

There are three countries to handle for this task: Spain, Ghana and Brazil (these stats/figures are imaginary and for this exercise only)

Spain:

- Extra fields:
  - Marital status
  - Social insurance number
- Minimum holiday allowance is 30 days

Ghana:

- Extra fields:
  - Marital status
  - Number of children
- No laws on holiday allowance

Brazil:

- Extra fields:
  - Working hours
- Maximum holiday allowance is 40 days

As there isn't currently a backend for this work, on form submit please log to the console the JSON you would normally send in a post request.

# TODO LIST

## code best pratices not compliant (those I remember in writing down this README)

- check for accessibility
- check if more memoization can be done
- clean up the code
- hardcoded strings (app title, submit label,... ) values, should be coming from props
- maybe more code splitting can be done
- maybe more styling can be done
- missing bash script to run test
- missing JSDOC
- missing Props Type
- missing test
- validation can be extended and improved (input)

## incomplete logic implementation

- reset form after submit and prevent multiple click / submitting form
- form validation in "holiday allowance" can fail on changing country after "holiday allowance" is already filled. To reproduce:
  - Selected country ES, Holiday allowance value 45 info color is blue
  - Select Brazil. The info color is still blue. Should be red because 45 is major than the allowance in Brazil.

# Installation

Download or clone the repo in one folder and install packages

```bash
      To install dependencies use `npm install`
```

# Usage

you can run it on local or go to this link and see it running there https://yyw0s.csb.app/

In the folder where the repo is cloned

```bash
      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
```

# Notes

I am aware that in a real work context the implementation is not ready to be review and need more work to be improved.

Below some choices / assumptions done writing the code and notifies

- I have preferred to spent more of available time on handle the logic / the state, splitting code / separate concerns, code extendability
- data are mocked because no backend part
- I'm not using redux or react router (as I'm suggesting in the Proposal) to avoid over engineering in this specific task. The component in any case can be used to consume / handle redux states, without too much effort
- I'm using Material UI, not for particular preference but to have a theme available and ready made to use with emotion

# PROPOSAL

available here https://docs.google.com/document/d/1EFP5wi3A7VuOXDMsxi-NePMtTWhHI3FuE7yXtqKd2SE/edit?usp=sharing
