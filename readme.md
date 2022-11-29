# Volvo recruitment task

## Getting Started

These instructions will show you how to run those tests

### Prerequisites


```
1. VS Code or WebStorm By JetBeans - IDE
2. Node.js Library (preferebly 16.8.0)
3. [Allure plugin](https://www.npmjs.com/package/allure-commandline)
4. [Docker](https://www.docker.com/)
```

### Installing

A step by step procedure to run the project


```
1. Clone the repo with "git clone https://github.com/Volvo2022/VolvoRecruitmentTask.git"
2. Open the cloned directory in VS Code.
3. Execute "npm install" (It'll download all the dependencies mentioned in package.json)
```

## Execution

### To run tests 
Start docker with command:

```
docker-compose up
```

Run all tests in parallel mode from directory ./test/spec, with command:

```
npm test
```

After tests finish generate report, with command:

```
npm run test:generatReport
```

Open report with command:

```
npm run test:openReport
```

## TODO

1. Stabilize test adding "explicite waiting" 
2. Dockerize solution
3. Create more sophisticated directory structure for page objects and specs