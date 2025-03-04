# SQL PROBLEMS SOLUTION

Query all columns for all American cities in the CITY table with populations larger than 100000. The CountryCode for America is USA.


SELECT * FROM CITY WHERE COUNTRYCODE = 'USA' AND POPULATION > 100000;
---

Write a solution to find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is strictly greater than 15.


SELECT tweet_id FROM Tweets WHERE LENGTH(content) > 15;
---

Write a query that prints a list of employee names (i.e.: the name attribute) from the Employee table in alphabetical order.



SELECT name FROM Employee ORDER BY name
---

Write a solution to swap all 'f' and 'm' values (i.e., change all 'f' values to 'm' and vice versa) with a single update statement and no intermediate temporary tables.

Note that you must write a single update statement, do not write any select statement for this problem.



UPDATE Salary SET sex = 
CASE sex
    WHEN 'm' THEN 'f'
    ELSE 'm'
END;
---
