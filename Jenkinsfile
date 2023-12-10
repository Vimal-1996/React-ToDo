pipeline{
  agent any
  stages{
    stage('Install dependencies'){
      steps{
        bat 'npm install' 
      }
      
    }
    
    stage('build'){
      steps{
        bat 'npm start'
      }
      
    }

    
  }
  
}
