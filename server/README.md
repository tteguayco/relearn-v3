


```
poetry install
```

```
poetry run uvicorn api.app:app --host localhost --port 8000 --reload
```


```
$ docker-compose up -d
```

# pgAdmin

pgAdmin is a useful tool for managing Postgres databases. You can access it at localhost:7000 with the credentials admin@relearn.com:password.
To connect to the database, add a server with the values:
Host name:The result of `docker inspect postgres_container_id | grep IPAddress`
port: 6000
username: postgres
password: password
