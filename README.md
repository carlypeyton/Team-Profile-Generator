# Team-Profile-Generator

## Project Description
This Node.js command-line application allows users to create a complete software engineering team profile, based on user responses to prompts. Run node index.js from command line to deploy application.

### User Story
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

### Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
## Application Walkthrough
![Application Walkthrough Gif](Media/Meet_Your_Team.gif)
  * https://drive.google.com/file/d/1BJJMhh7VcZWELZgB6RCoBFUmfU8pR6Hz/view

## Testing 
This application was tested using Jest testing framework. All tests have passed.

![Application Testing Gif](Media/Meet_Your_Team_Tests.gif)
* https://drive.google.com/file/d/1P6IpGaonW7IDVNJaOSSjP7WFmfnQopbC/view

<img src = "Media/Employee_Test.png" width=400px>
<img src = "Media/Intern_Test.png" width=400px>
<img src = "Media/Engineer_Test.png" width=400px>
<img src = "Media/Manager_Test.png" width=400px>

## Installation Instructions
Install npm inquirer package prior to deploying application. 