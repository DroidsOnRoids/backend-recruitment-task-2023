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
There are three tasks.
Task 0 is just to check that everything is set up properly.
```
cd tasks/task0
npm test
```
Task 1 is a warm-up.
Task 3 is the main goal of pair programming.
