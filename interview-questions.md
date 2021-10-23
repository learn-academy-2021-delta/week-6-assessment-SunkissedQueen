# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: We are human and occasionally make mistakes. Thank goodness, the area was noticed and that there are techniques available to us to correct these errors. I will need a bit more information or see the database to see how many errors need to handled. You might possibly need the delete/destroy method to remove any excessive columns. You can also create a nested table can state that the unique key based on the column in the main header. I will need to research on the correct syntax. Hopefully, this helps.

  Researched answer:



2. Which RESTful routes must always be passed params? Why?

  Your answer: RESTful routes give guidance to the browser on where to select information to display on the user screens. To ensure that this occurs, you will need the correct HTTP verb and to render the correct method or path established on the controller.

  Researched answer:



3. Name three rails generator commands. What is created by each?

  Your answer: Rails is so helpful in creating and modifying its applications. For instance, `rails s` allows a server to connect to the application or database that it created and display viewpoints of the CRUD actions rendered by the user interaction with your code. 'rails c' gives you access to the rails console. This space is where the database can be manually manipulated by creating, updating, deleting, or searching for instances within the database. 'rails db:create' allows you to have a database to manipulate of course the generate request.

  Researched answer:



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?
                                    controller  action
method="GET"    /students           index       display a list of all students

method="POST"   /students           create      create a new student

method="GET"    /students/new       new         return an HTML form for creating a new student

method="GET"    /students/2         show        display a specific student

method="GET"    /students/2/edit    edit        return an HTML form for editing a student

method="PATCH"  /students/2         update      update a specific student

method="DELETE" /students/2         destroy     delete a specific student



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a developer, I have been forced to create an application to manage my to do list.

1. As a syntactical magician (developer), I can create a Full Stack Rails application.
2. As a master of coding syntax (developer), the to do list can have a title, duration, date assigned, and completion status.
3. As a developer, I can add a new item which includes title, duration, date assigned, and completion status on the to do list directly to my database.

4. As a user who will enjoy my handiwork, I can see all the titles listed on the home page of the application.
5. As a person who is staring at the screen (user), I can click on the title in my to do list and be routed to a page where I see the title, duration, date assigned, and completion status of that selection.
6. As a user, I can navigate from the show page back to the home page.
7. As a user, I see a form where I can create a new to do list item.
8. As a user, I can click a button that will take me from the home page to a page where I can create a to do list item.
9. As a user, I can navigate from the form back to the home page.
10. As a user, I can click a button that will submit my to do list item back to the database and redirect me to the home page.
