# TO-Do App
As some greate personality said: `Subtracting from your list of priorities is as important as adding to it.`. So here we have ToDo-List application, which will keep track of all your priorities.

## Functionality
` Home Page: `
1. The home page have three input:
 > * Category: Contains different category of your activity.
 > * Due Date: The date in which you wish to complete the activity .
 > * Activity Name: Name of the activity which user want to perform.

2. On clicking submit the activity will be display in the browser with all other details.

3. User can also delete the activiy by clicking on delete icon.

4. Total task present in the bucket will be display in bottom left corner.

5. If user want to empty the bucket he/she can click on button present at bottom right corner.

6. In bottom there are different categories option user can see activity related to the particular category. 

![Homepage](/assets/images/home.JPG)


## Folder Structure
 #### This code follows MVC (Model, View, Controller) Architecture.
- Assets: It contains all static file CSS, JS, Images.
- Config: It contains connection to Database.
- Controller: It redirect the webpage according to user action.
- Models: It contains Database Schema.
- Routes: It contains all routes.
- Views: It contins all file which render UI to browser.

## Getting Started
1. Clone the project.
2. Go to folder.
3. Run following command.
    ``` 
    npm install express
    npm install ejs
    npm install mongoose 
    ```
4. Connect to mongodb.
5. Run command: `npm start`
6. Go to https://localhost/8000 to use the application.


