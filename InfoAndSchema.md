Database Schema:
----------------------------
create database event;

use event;

Table:
CREATE TABLE registration (
    stdid VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    mobileno VARCHAR(15) NOT NULL,
    event VARCHAR(100) NOT NULL,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

Optional:
desc registration;

Check the data is inserted or not:
select * from registration;



//Middle Ware Explanation:

express.urlencoded({ extended: true }) is middleware in Express that parses URL-encoded data and makes it available as a JavaScript object in (req.body)



When a user submits a form, the browser sends the data like this:

name=Alice&email=alice@example.com

The above format is called URL-encoded format 


The urlencoded() middleware parses that into a JavaScript object:

{
  name: 'Alice',
  email: 'alice@example.com'
}

now the req.body contains the parsed js object(key-value data)


extended: true or false :

controls how the form data is parsed — specifically, how complex the object structure can be.

extended: false	Parses URL-encoded data with the querystring library (simple objects only)(default)

extended: true	Parses data using the qs library (allows for rich, nested objects)


Input (from form):
<input name="user[name]" value="Alice">
<input name="user[email]" value="alice@example.com">

With extended: false:

req.body
// => { 'user[name]': 'Alice', 'user[email]': 'alice@example.com' }

With extended: true:

req.body
// => { user: { name: 'Alice', email: 'alice@example.com' } }
