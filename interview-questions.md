# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: We are human and occasionally make mistakes. Thank goodness, the error was noticed and that there are techniques available to us to correct them. I will need a bit more information or see the database to see how many errors need to handled. You might possibly need the delete/destroy method to remove any excessive columns. You can also create a nested table by stating the unique key based on the column in the main header. I will need to research on the correct syntax. Hopefully, this helps.

  Researched answer: Rails gets to partake in the miracles of Ruby. Before researching, I had assumed that the table had to be altered and various other syntax to achieve the foreign key onto the table. It appears that under the migration that add_foreign_key along with the column name will produce the relationship between the two tables. Syntax format will be add_foreign_key(:cohort, :student).
  Ensure the structure are correct in the Cohort and Student models with a has_many and belongs_to respectively.

  class Cohort < ApplicationRecord              
    has_many :students                            
  end                                           

  class Student < ApplicationRecord
    belongs_to :cohort
  end

  The foreign key should always go on the belongs_to side, which is the Student model. The naming convention is the modelname_id and datatype as integer, which will be cohort_id: integer.


2. Which RESTful routes must always be passed params? Why?

  Your answer: RESTful routes give guidance to the browser on where to select information to display on the user screens. To ensure that this occurs, you will need the correct HTTP verb and to render the correct method or path established on the controller.

  Researched answer: I really tried to research, but I did not receive a much clarity. After I analyze the tables, I am assuming that the instances that show a single output or selected out put are the ones that require a parameter. My answer will be the new, show, edit, update, and destroy.



3. Name three rails generator commands. What is created by each?

  Your answer: Rails is so helpful in creating and modifying its applications. For instance, `rails s` allows a server to connect to the application or database that it created and display viewpoints of the CRUD actions rendered by the user interaction with your code. 'rails c' gives you access to the rails console. This space is where the database can be manually manipulated by creating, updating, deleting, or searching for instances within the database. 'rails db:create' allows you to have a database to manipulate of course the generate request.

  Researched answer: Type 'rails generate -h' or 'rails g -h'. Wow! Lot of options for the generator command are available. Controller, Model, Resource, and Scaffold are the most commonly used generators. Out of these I have less experience with the Resource generator which is very similar to the Model generator; the difference is that it also creates a controller, view folders, and routes. I have yet to use the Scaffold generator, which creates a fully crud functional application with model, controller, views, and routes.



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
