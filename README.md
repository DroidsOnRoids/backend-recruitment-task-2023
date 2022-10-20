# DOR recruitment task

The recommended way to start the work is to:
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

### Only for DOR team [DON'T READ]
Build:
`docker build -t dor-brt .`
`docker run -v $(pwd):/app -it dor-brt /bin/bash`
