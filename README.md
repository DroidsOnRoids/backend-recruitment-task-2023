# DOR recruitment task

The recommended way to start the work is to install dependencies
```bash
npm install
```
and then run this command:
```bash
docker run -v $(pwd)/tasks:/app/tasks -it kzielonka/dor-brt:latest /bin/bash
```
You should get access to `bash`.
There are two tasks.
The task 1 is just a warm up which is meant to check that everything is set up properly.
Please run:
```
cd tasks/task1
npm test
```
The task 2 is the one on wich we will be pair programming.
