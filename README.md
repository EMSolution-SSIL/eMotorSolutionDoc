# For Users

The website as accessible through [https://eskandarih.github.io/eMotorSolutionDoc/](https://eskandarih.github.io/eMotorSolutionDoc/) 

# For Developers

## 1. Initial Setup
1. Install [Node.js](https://nodejs.org/en/download/) (LTS version recommended).
    ```bash
    node -v
    ```
2. Clone the repository to your local machine.
    ```bash   
    git clone https://github.com/eskandarih/eMotorSolutionDoc.git
    ```
3. Navigate to the cloned directory in your terminal.
    ```bash
    cd eMotorSolutionDoc
    ```
4. Install the dependencies 
    ```bash
    npm install
    ```

## 2. Running the Development Server
For Japanese version:
```bash
npm run start
```
For English version:
```bash
npm run start -- --locale en
```
In developer mode it is not possible to switch between languages. You need to restart the server with the desired language.

## 3. Deploying the Documentation
```bash
$env:GIT_USER="<Your GitHub username>"
npm run deploy
```
This will build the documentation and deploy it to the `gh-pages` branch of your repository. It might take a few minutes for the changes to be reflected on the live site.


# Additional Information
For more information on how to use the documentation, please refer to the [Docusaurus documentation](https://docusaurus.io/docs).
