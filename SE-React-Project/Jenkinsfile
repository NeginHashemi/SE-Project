pipeline {
  environment {
    registry = "negindocker202/lemonmarket"
    registryCredential = 'lemonmarket'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/Allarious/SE-React-Project.git'
      }
    }
    stage('Build') {
      agent {
          docker {
                image 'node:6-alpine' 
                args '-p 3000:3000' 
            }
      }
       steps {
         parallel(
            a: {
              sh 'npm install'
            },
            b: {
              sh '''cd mock-server
              npm install'''
            }
         )
       }
    }
    stage('Test docker') {
      steps {
        sh 'docker --version'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}
