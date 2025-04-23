### SQL queries

## Game Play Analysis I
    Write a solution to find the first login date for each player.

~~~sql
SELECT player_id, MIN(event_date) AS first_login FROM Activity
GROUP BY player_id;
~~~

## Department Highest Salary
    Write a solution to find employees who have the highest salary in each of the departments.


~~~sql
SELECT player_id, MIN(event_date) AS first_login FROM Activity
GROUP BY player_id;
~~~


## Customers Who Never Order
    Write a solution to find all customers who never order anything.

~~~sql
SELECT name AS Customers FROM Customers
LEFT JOIN Orders ON Customers.id = Orders.customerId
WHERE Orders.customerId IS NULL 
~~~

## Rising Temperature
    Write a solution to find all dates' id with higher temperatures compared to its previous dates (yesterday).

~~~sql
SELECT w1.id
FROM Weather w1, Weather w2
WHERE DATEDIFF(w1.recordDate, w2.recordDate) = 1 AND w1.temperature > w2.temperature;
~~~

## Confirmation Rate
    The confirmation rate of a user is the number of 'confirmed' messages divided by the total number of requested confirmation messages. The confirmation rate of a user that did not request any confirmation messages is 0. Round the confirmation rate to two decimal places.
~~~sql
SELECT s.user_id, ROUND(AVG(IF(c.action="confirmed", 1, 0)),2)
AS confirmation_rate
FROM Signups AS s
LEFT JOIN Confirmations AS c
ON s.user_id = c.user_id
GROUP BY user_id
~~~

## The Report
    Ketty gives Eve a task to generate a report containing three columns: Name, Grade and Mark. Ketty doesn't want the NAMES of those students who received a grade lower than 8. The report must be in descending order by grade -- i.e. higher grades are entered first. If there is more than one student with the same grade (8-10) assigned to them, order those particular students by their name alphabetically. Finally, if the grade is lower than 8, use "NULL" as their name and list them by their grades in descending order. If there is more than one student with the same grade (1-7) assigned to them, order those particular students by their marks in ascending order.
    Write a query to help Eve.
~~~sql
SELECT IF(g.Grade>7,s.Name,NULL), g.Grade, s.Marks FROM Students s JOIN Grades g ON s.Marks BETWEEN g.Min_Mark AND g.Max_Mark
ORDER BY g.Grade DESC, s.Name, s.Marks
~~~