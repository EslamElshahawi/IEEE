## Solve the following SQL problems: 

* ### Type OF Triangle
    Write a query identifying the type of each record in the TRIANGLES table using its three side lengths. Output one of the following statements for each record in the table:

    Equilateral: It's a triangle with  sides of equal length.
    Isosceles: It's a triangle with  sides of equal length.
    Scalene: It's a triangle with  sides of differing lengths.
    Not A Triangle: The given values of A, B, and C don't form a triangle.

    ~~~sql
        SELECT
            CASE
                WHEN A + B <= C OR B+C <= A OR A+C <= B THEN 'Not A Triangle' 
                WHEN A = B AND B = C THEN 'Equilateral'
                WHEN A = B OR B = C OR A = C THEN 'Isosceles'
                ELSE 'Scalene'
            END AS Type
        FROM Triangles
    ~~~

* ### Find Products with Valid Serial Numbers
    Write a solution to find all products whose description contains a valid serial number pattern. A valid serial number follows these rules:

    It starts with the letters SN (case-sensitive).
    Followed by exactly 4 digits.
    It must have a hyphen (-) followed by exactly 4 digits.
    The serial number must be within the description (it may not necessarily start at the beginning).
    Return the result table ordered by product_id in ascending order.



    ~~~sql
        SELECT * FROM products 
        WHERE description regexp ' SN[0-9]{4}-[0-9]{4}[^0-9]+'
        OR description regexp ' SN[0-9]{4}-[0-9]{4}$' 
    ~~~

* ### Find Students Who Improved
    Write a solution to find the students who have shown improvement. A student is considered to have shown improvement if they meet both of these conditions:

    Have taken exams in the same subject on at least two different dates
    Their latest score in that subject is higher than their first score
    Return the result table ordered by student_id, subject in ascending order.



    ~~~sql
    WITH Ranked AS (
        SELECT
        student_id,
        subject,
        FIRST_VALUE(score) OVER(PARTITION BY student_id,subject ORDER BY exam_date) AS first_score,
        FIRST_VALUE(score) OVER(PARTITION BY student_id,subject ORDER BY exam_date DESC) AS latest_score
        FROM Scores
    )
    SELECT DISTINCT * FROM Ranked
    WHERE first_score<latest_score
    ORDER BY student_id,subject
    ~~~

* ### Percentage of Users Attended a Contest
    Write a solution to find the percentage of the users registered in each contest rounded to two decimals.

    Return the result table ordered by percentage in descending order. In case of a tie, order it by contest_id in ascending order.



    ~~~sql
        SELECT contest_id, ROUND(COUNT(user_id) * 100/
        (SELECT COUNT(user_id) FROM Users),2)
        AS percentage
        FROM Register
        GROUP BY contest_id
        ORDER BY percentage DESC, contest_id
    ~~~