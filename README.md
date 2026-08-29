# Introduction

This is a Playwright Automation project for the SDET Take-Home Assessment for Origami Risk. 
The purpose of this project is to test the automation skill through a practical, take-home assessment. 

# Overview of the project

This project is a Playwright Automation project with the purpose of testing a login page. The testing is done by verifying 3 test cases:
1. A positive scenario where the username and password are correct
2. A negative scenario where the username is incorrect
3. A negative scenario where the password is incorrect

The structure of the project is that of a playwright project with modifications to accomodate an OOP approach to the project.

## Lib folder
The lib folder has the base test and the env files. 

The base-test is a custome fixture that allows for the creation of browser sessions with specific conditions. This is used for the OOP approach of the project in order to instantiate the page object classes with the correct context and page and allows for reusability and versatility on the project.

The env files contains the environment variables like the correct username, password and URL of the page we are going to be testing on.

## Page-Objects folder
The page-objects folder has the login page file. This file allow the user to store page objects and methods for the login page simulating 
a class like in Object Oriented Progamming. The page elements are similar to the variables of the class, and the functions like the class's methods. 

The purpose of this structure is to facilitate the use of elements multiple times during a test, while also creating functions that can be resued every time the test interacts with that page. In this project, the login is done through a function where we pass the username, password and expected response in order to test the positive and negative test cases without rewriting code.

## Tests Folder
on the 'tests' older we have the tests files. Currently the only file on the folder is the 'login.spec.ts' which cover all 3 scenarios for this evaluation, because for this project we are following a functionality structure (if more tests were to be added, each functionality or test suite would get their own .spec.ts file)

## Playwright Config file

The base config file has been modified in order to redirect the test to use the baseURL of the Environment file as well as to run the test opening a browser to view the test run (non headless mode)

# Project Setup Instructions

## Prerequisites
In order to run commands used for instalation the user needs to have Node.js and npm installed in their device

## Set up
To install and make the setup of the project, a user would need to do the following:
1. Clone the repository and move inside the folder with the project
2. Run the command 'npm install' 
3. Run the command 'npm playwright install'
Optional for Linux/Mac
4. Run the command 'npx playwright install-deps' 

# How to run the tests

In order to run the tests a user can run the following commands:
1. 'npx playwright test': Will run all test files inside the 'tests' folder
2. 'npx playwright test tests/login.spec.ts': Will run only the tests inside the 'login.spec.ts' file
3. 'npx playwright test -g "Name of Test"': Will only run the test with the name passed on the command

## Modifiers
Add the followig commands after the commands above for additional options/features when running tests
1. '--debug': Will run test in debug mode
2. '--headed': Will run test in headed mode (Showing GUI)
