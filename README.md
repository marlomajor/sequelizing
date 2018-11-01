# Sequelizing

Application built to show associations in Node using Sequelizer

### Running the program

To migrate:
```
sequelize db:migrate
```

Start the server:
```
nodemon
```

Open a new tab in your terminal and copy and paste the following:
```
curl -i -X POST -H "Content-Type: application/json" -d '{ "company_name":"Djamware.com","company_address":"Setiabudhi km.9, Ledeng","company_city":"Bandung","branches": [{ "branch_name":"Local Branch", "branch_address":"Setiabudhi km.9, Ledeng", "branch_city":"Bandung" },{ "branch_name":"International Branch", "branch_address":"Salt Lake View", "branch_city":"Salt Lake City" }] }' localhost:3000/api/company/add_with_branches
```

You should see the response in the terminal. Query the db to see the entry.
