# game-stats-handler


```
    $ docker compose down
    $ docker compose up
```


control center: kafka management interface http://localhost:9021


```
    $ docker compose exec broker bash
    $ kafka-console-producer --topic actions --bootstrap-server http://localhost:9022
```


requests: [api.http](api.http)


- consumer
![consumer](<files/Screenshot from 2023-07-06 00-40-30.png>)


- producer
![producer](<files/Screenshot from 2023-07-06 00-44-56.png>)
