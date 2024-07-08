# DOR Recruitment Task

Welcome to the DOR recruitment task. Follow the instructions below to set up your environment and complete the tasks.

In order to run the following code along with our instruction you need to have docker installed on your machine.

(If You don't feel free to run it locally on your machine )

## Getting Started

1. **Set Up Your Environment:**

   Run the following Docker command to start the environment and get access to `bash`:

   ```bash
   docker run -v $(pwd)/tasks:/app/tasks -it kzielonka/dor-brt:latest /bin/bash
   ```

2. **[Optionally] Verify Setup with Task 0:**
   Task 0 is a piece of code to ensure everything is set up properly. Navigate to the task directory and run the tests:

   ```bash
   cd tasks/task0
   npm test
   ```

   All tests should pass and you are ready to proceed!

3. **Warm up with Task 1:**
   Task 1 is a warm-up. Navigate to the task directory and run the tests:

   Run the following Docker command to start the environment and get access to `bash`:

   ```bash
   cd tasks/task1
   npm test
   ```

4. **Proceed to Task 2:**
   Task 2 is the main task where we will be doing pair programming.
   Navigate to the task directory and read instruction in the dedicated `README.md` file.

### Notes

- Task 0: setup verification.
- Task 1: A simple warm-up task.
- Task 2: The main task for pair programming.
