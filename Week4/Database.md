# Database Design Concepts Summary

## Stages of database design 

- ### Gathering Requirements
    - Defining the required information for designing and creating the database 
    - We should conclude from this stage what types of data we will be required to store(Objects, Entities, ..)
    - We also should know what is the most common query types we will be doing 
    - Every information possible that can be taken away from sitting down with the customer of this database is very important
    - This stage takes time and patience and a lot of communication with the customer 
    - If you are the customer and you know the requirements well then you should document it and go to the next stage

- ### DBMS Selection
    - After gathering the requirements we should at least know the answer to 2 questions
        - what kind of data we're gonna store?
            - like graphs or key-value pairs or relations
        - What is the usage patterns for the customer or what is the most common kind of queries?
            - the customer might want a social network to be a graph as he wants to traverse from each node to the other connected nodes
            - he might also want to make analytical queries and real-time summarizations for the data
    - we have to combine the answer to those two questions and other questions to make the best of the DBMS
    - mostly the required DBMS for the task will be relational but you should search and make sure that the DBMS you chose fits your requirements

- ### Analysis
    -   In this stage we should make a data model for the customer to give feedback on
    - This data model isn't the final form of the database or tables or anything like that
    - We make diagrams for the customer to understand and to be able to correct mistakes in the data model
    - We should define in the model what entities we have and the relationships between them and the attributes for each entity using ER(Entity Relationship) diagrams
    - This ensures that we have all the required data and we have an efficent model for efficent queries
- ### Logical design
    -   converting ER diagrams to tables and defining atribute types (string, Int, ..)
    - making primary keys and foreign keys for each table either by defining a new atribute or by choosing an existent atribute or by comibining multible atributes to define a unique key for each tuple
    - Going through the Normalization of the database to make it less redundent and to ensure the data is consistent and to avoid errors
- ### Physical Design
    - mapping the attribute types to the supported types of your selected DBMS service
    - taking desicions about the infrastructure of your server to boost performance like what kind of partitioning or sharding is required etc..

- ### Creation
    - we implement the database design using SQL statements for Relational design for example
    - we begin inserting data into the newly created database and data could be stored in different ways like a single file or seperate files or on another database