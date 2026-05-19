pipeline {
    agent any

    environment {
        IMAGE_NAME = "portfolio-site"
        CONTAINER_NAME = "portfolio-container"
    }

    stages {

        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker run -d \
                --name $CONTAINER_NAME \
                -p 8081:80 \
                $IMAGE_NAME
                '''
            }
        }

        stage('Check Running Containers') {
            steps {
                sh 'docker ps'
            }
        }
    }

    post {

        success {
            echo 'Portfolio website deployed successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}